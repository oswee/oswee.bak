package main

import (
	"fmt"
	"os"

	"github.com/oswee/oswee/pkg/cmd/auth-service/command"
)

func main() {
	if err := command.RunAuthServer(); err != nil {
		fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}
}
