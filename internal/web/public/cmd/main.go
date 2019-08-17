package main

import (
	"fmt"
	"os"

	app "github.com/oswee/oswee/domains/public/app"
)

func main() {
	if err := app.RunServer(); err != nil {
		fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}
}

// go build -o cmd/api-server/user-api cmd/api-server/main.go
// ./cmd/api-server/user-api -grpc-port=9090 -http-port=8080 -db-host=localhost:3306 -db-user=root -db-password=root -db-schema=user -log-level=-1 -log-time-format=2006-01-02T15:04:05.999999999Z07:00
