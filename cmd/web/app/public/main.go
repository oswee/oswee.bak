package main

import (
	"fmt"
	"os"

	client "github.com/oswee/oswee/internal/app/public-client"
)

func main() {
	if err := client.RunServer(); err != nil {
		fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}
}
