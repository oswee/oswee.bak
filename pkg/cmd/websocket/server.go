package websocket

import (
	"fmt"
	"net/http"

	"github.com/dzintars/project-layout/pkg/service/websocket"
	"github.com/dzintars/project-layout/pkg/sessions"
)

// SetupRoutes ...
func SetupRoutes() {
	http.HandleFunc("/v1/ws/public", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Public WebSocket Endpoint Hit")
		pool := websocket.NewPool()
		go pool.Start()
		serveWs(pool, "2229215a-68f4-453f-ad88-7e2fac0bdXXX", w, r)
	})

	http.HandleFunc("/v1/ws/private", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Private WebSocket Endpoint Hit")
		session, _ := sessions.Store.Get(r, "SSID")
		stakeholder := session.Values["stakeholderUUID"].(string)
		user := session.Values["userUUID"].(string)
		pool := websocket.NewPool()
		pool.Stakeholder = stakeholder
		go pool.Start()
		// Do authentication there
		if stakeholder == "2229215a-68f4-453f-ad88-7e2fac0bdaf6" {
			serveWs(pool, user, w, r)
			return
		}
		// Make user validation and create or add user to his business account WS pool.
	})
}

func serveWs(pool *websocket.Pool, id string, w http.ResponseWriter, r *http.Request) {

	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}

	client := &websocket.Client{
		ID:   id,
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()
}
