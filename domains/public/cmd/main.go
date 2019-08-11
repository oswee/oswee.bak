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
