package command

import (
	"context"
	"flag"
	"fmt"

	v1 "github.com/oswee/oswee/internal/app/auth/v1"
	"github.com/oswee/oswee/pkg/logger"
	grpc "github.com/oswee/oswee/pkg/protocol/grpc"
	rest "github.com/oswee/oswee/pkg/protocol/rest"
)

// Config is configuration for Server
type Config struct {
	// gRPC server start parameters section
	// GRPCPort is TCP port to listen by gRPC server
	GRPCPort string

	HTTPPort string

	// Log parameters section
	// LogLevel is global log level: Debug(-1), Info(0), Warn(1), Error(2), DPanic(3), Panic(4), Fatal(5)
	LogLevel int
	// LogTimeFormat is print time format for logger e.g. 2006-01-02T15:04:05Z07:00
	LogTimeFormat string
}

// RunAuthServer runs gRPC server and HTTP gateway
func RunAuthServer() error {
	ctx := context.Background()

	// get configuration
	var cfg Config
	flag.StringVar(&cfg.GRPCPort, "grpc-port", "", "gRPC port to bind")
	flag.StringVar(&cfg.HTTPPort, "http-port", "", "HTTP port to bind")
	flag.IntVar(&cfg.LogLevel, "log-level", 0, "Global log level")
	flag.StringVar(&cfg.LogTimeFormat, "log-time-format", "",
		"Print time format for logger e.g. 2006-01-02T15:04:05Z07:00")
	flag.Parse()

	if len(cfg.GRPCPort) == 0 {
		return fmt.Errorf("invalid TCP port for gRPC server: '%s'", cfg.GRPCPort)
	}

	if len(cfg.HTTPPort) == 0 {
		return fmt.Errorf("invalid TCP port for HTTP gateway: '%s'", cfg.HTTPPort)
	}

	// initialize logger
	if err := logger.Init(cfg.LogLevel, cfg.LogTimeFormat); err != nil {
		return fmt.Errorf("failed to initialize logger: %v", err)
	}

	v1API := v1.NewAuthCommandServiceServer()

	// run HTTP gateway
	go func() {
		_ = rest.RunAuthServer(ctx, cfg.GRPCPort, cfg.HTTPPort)
	}()

	return grpc.RunAuthServer(ctx, v1API, cfg.GRPCPort)
}
