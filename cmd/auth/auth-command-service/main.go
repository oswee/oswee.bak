package main

import (
	"fmt"
	"os"

	"github.com/dzintars/project-layout/pkg/cmd/auth-service/command"
)

func main() {
	if err := command.RunAuthServer(); err != nil {
		fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}
}
