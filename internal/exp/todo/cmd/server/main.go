package main

import (
	"fmt"
	"os"

	"github.com/oswee/oswee/domains/todo/pkg/cmd"
)

// go build .
// ./main -grpc-port=9090 -http-port=8080 -db-host=<HOST>:3306 -db-user=<USER> -db-password=<PASSWORD> -db-schema=<SCHEMA> -log-level=-1 -log-time-format=2006-01-02T15:04:05.999999999Z07:00
// ./server -grpc-port=9090 -http-port=8080 -db-host=localhost:3306 -db-user=root -db-password=root -db-schema=todo -log-level=-1 -log-time-format=2006-01-02T15:04:05.999999999Z07:00

func main() {
	if err := cmd.RunServer(); err != nil {
		fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}
}
