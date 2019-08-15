package app

import (
	"crypto/tls"
	"flag"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/oswee/oswee/domains/public/app/middleware"
	"github.com/oswee/oswee/pkg/logger"
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

// RunServer ...
func RunServer() error {
	// ctx := context.Background()

	var cfg Config
	flag.StringVar(&cfg.HTTPPort, "http-port", "8443", "HTTP port to bind")
	flag.IntVar(&cfg.LogLevel, "log-level", 0, "Global log level")
	flag.StringVar(&cfg.LogTimeFormat, "log-time-format", "2006-01-02T15:04:05Z07:00",
		"Print time format for logger e.g. 2006-01-02T15:04:05Z07:00")
	flag.Parse()

	if len(cfg.HTTPPort) == 0 {
		return fmt.Errorf("invalid TCP port for HTTP gateway: '%s'", cfg.HTTPPort)
	}

	// initialize logger
	if err := logger.Init(cfg.LogLevel, cfg.LogTimeFormat); err != nil {
		return fmt.Errorf("failed to initialize logger: %v", err)
	}

	tlsConfig := &tls.Config{
		MinVersion:               tls.VersionTLS12,
		CurvePreferences:         []tls.CurveID{tls.CurveP521, tls.CurveP384, tls.CurveP256},
		PreferServerCipherSuites: true,
		CipherSuites: []uint16{
			// https://golang.org/src/crypto/tls/cipher_suites.go
			tls.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,
			tls.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,
			tls.TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305, // Go 1.8 only
			tls.TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,   // Go 1.8 only
			tls.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,
			tls.TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,

			// tls.TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,	//	| 4
			// tls.TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,	//	| 3
			// tls.TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256, //	5 (HTTP/2)
			// tls.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,
			// tls.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,   //	1 | 2
			// tls.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384, //	2 | 1
			// tls.TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,
			// tls.TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,
			// tls.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,
			// tls.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA,
			// tls.TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,   //	3
			// tls.TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA, //	4
			// tls.TLS_RSA_WITH_AES_128_GCM_SHA256,		// Best disabled, as they don't provide Forward Secrecy, but might be necessary for some clients
			// tls.TLS_RSA_WITH_AES_256_GCM_SHA384,		// Best disabled, as they don't provide Forward Secrecy, but might be necessary for some clients
			// tls.TLS_RSA_WITH_AES_128_CBC_SHA256,
			// tls.TLS_RSA_WITH_AES_128_CBC_SHA,
			// tls.TLS_RSA_WITH_AES_256_CBC_SHA,
			// tls.TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA,
			// tls.TLS_RSA_WITH_3DES_EDE_CBC_SHA,

			// RC4-based cipher suites are disabled by default.
			// tls.TLS_RSA_WITH_RC4_128_SHA,
			// tls.TLS_ECDHE_RSA_WITH_RC4_128_SHA,
			// tls.TLS_ECDHE_ECDSA_WITH_RC4_128_SHA,
		},
	}

	router := newRouter()

	srv := &http.Server{
		Addr:           ":" + cfg.HTTPPort,
		ReadTimeout:    5 * time.Second,
		WriteTimeout:   10 * time.Second,
		IdleTimeout:    120 * time.Second,
		Handler:        middleware.AddRequestID(middleware.AddLogger(logger.Log, router)),
		MaxHeaderBytes: 1 << 20,
		TLSConfig:      tlsConfig,
		// TLSNextProto:   make(map[string]func(*http.Server, *tls.Conn, http.Handler), 0),	// HTTP/2 disabled when enabled this.
	}
	// log.Fatal(srv.ListenAndServe())
	// err1 := srv.ListenAndServeTLS("./certs/server.ecdsa.crt", "./certs/server.ecdsa.key")
	err := srv.ListenAndServeTLS("./certs/cert.crt", "./certs/cert.key")
	if err != nil {
		log.Fatalf("Client failed to start: %v", err)
	}
	return nil
}
