package main

import (
	"fmt"
	"os"

	client "github.com/oswee/oswee/domains/public/app"
)

func main() {
	if err := client.RunServer(); err != nil {
		fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}
}
