package main

import (
	"database/sql"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	"github.com/oswee/oswee/internal/exp/hex/database/psql"
	redisdb "github.com/oswee/oswee/internal/exp/hex/database/redis"
	"github.com/oswee/oswee/internal/exp/hex/ticket"

	"github.com/go-redis/redis"
	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

func main() {

	dbType := flag.String("database", "redis", "database type [redis, psql]")
	flag.Parse()

	var ticketRepo ticket.TicketRepository

	switch *dbType {
	case "psql":
		pconn := postgresConnection("postgresql://postgres@localhost/ticket?sslmode=disable")
		defer pconn.Close()
		ticketRepo = psql.NewPostgresTicketRepository(pconn)
	case "redis":
		rconn := redisConnection("localhost:6379")
		defer rconn.Close()
		ticketRepo = redisdb.NewRedisTicketRepository(rconn)
	default:
		panic("Unknown database")
	}

	ticketService := ticket.NewTicketService(ticketRepo)
	ticketHandler := ticket.NewTicketHandler(ticketService)

	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/tickets", ticketHandler.Get).Methods("GET")
	router.HandleFunc("/tickets/{id}", ticketHandler.GetById).Methods("GET")
	router.HandleFunc("/tickets", ticketHandler.Create).Methods("POST")

	http.Handle("/", accessControl(router))

	errs := make(chan error, 2)
	go func() {
		fmt.Println("Listening on port :3000")
		errs <- http.ListenAndServe(":3000", nil)
	}()
	go func() {
		c := make(chan os.Signal, 1)
		signal.Notify(c, syscall.SIGINT)
		errs <- fmt.Errorf("%s", <-c)
	}()

	fmt.Printf("terminated %s", <-errs)

}

func redisConnection(url string) *redis.Client {
	fmt.Println("Connecting to Redis DB")
	client := redis.NewClient(&redis.Options{
		Addr:     url,
		Password: "", // no password set
		DB:       0,  // use default DB
	})
	err := client.Ping().Err()

	if err != nil {
		panic(err)
	}
	return client
}

func postgresConnection(database string) *sql.DB {
	fmt.Println("Connecting to PostgreSQL DB")
	db, err := sql.Open("postgres", database)
	if err != nil {
		log.Fatalf("%s", err)
		panic(err)
	}
	return db
}

func accessControl(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type")

		if r.Method == "OPTIONS" {
			return
		}

		h.ServeHTTP(w, r)
	})
}
