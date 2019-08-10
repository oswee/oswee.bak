package client

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/oswee/oswee/domains/public/app/middleware"
	"github.com/oswee/oswee/domains/public/pkg/logger"
)

// Config is configuration for Server
type Config struct {
	// HTTP/REST gateway start parameters section
	// HTTPPort is TCP port to listen by HTTP/REST gateway
	HTTPPort string

	// Log parameters section
	// LogLevel is global log level: Debug(-1), Info(0), Warn(1), Error(2), DPanic(3), Panic(4), Fatal(5)
	LogLevel int
	// LogTimeFormat is print time format for logger e.g. 2006-01-02T15:04:05Z07:00
	LogTimeFormat string
}

func RunServer() error {
	// ctx := context.Background()

	var cfg Config
	flag.StringVar(&cfg.HTTPPort, "http-port", "", "HTTP port to bind")
	flag.IntVar(&cfg.LogLevel, "log-level", 0, "Global log level")
	flag.StringVar(&cfg.LogTimeFormat, "log-time-format", "",
		"Print time format for logger e.g. 2006-01-02T15:04:05Z07:00")
	flag.Parse()

	if len(cfg.HTTPPort) == 0 {
		return fmt.Errorf("invalid TCP port for HTTP gateway: '%s'", cfg.HTTPPort)
	}

	// initialize logger
	if err := logger.Init(cfg.LogLevel, cfg.LogTimeFormat); err != nil {
		return fmt.Errorf("failed to initialize logger: %v", err)
	}

	router := newRouter()

	srv := &http.Server{
		Addr:         ":" + cfg.HTTPPort,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  120 * time.Second,
		//TLSConfig: tlsConfig,
		Handler: middleware.AddRequestID(middleware.AddLogger(logger.Log, router)),
	}
	log.Fatal(srv.ListenAndServe())
	// err := srv.ListenAndServe()
	// if err != nil {
	// 	log.Fatalf("Client failed to start: %v", err)
	// }
	fmt.Println("Client listening on port: ", cfg.HTTPPort)
	return nil
}
