package main

import (
	"fmt"
	"os"

	"github.com/oswee/oswee/internal/core/user/command-gateway/pkg/cmd"
)

// go build -o ./cmd/main ./cmd/main.go
// ./cmd/main -grpc-port=9090 -http-port=8080 -db-host=localhost:3306 -db-user=root -db-password=root -db-schema=todo -log-level=-1 -log-time-format=2006-01-02T15:04:05.999999999Z07:00

func main() {
	if err := cmd.RunServer(); err != nil {
		fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}
}
