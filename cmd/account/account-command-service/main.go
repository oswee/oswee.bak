package main

import (
	"fmt"
	"os"

	"github.com/dzintars/project-layout/pkg/cmd/account-service/command"
)

func main() {
	if err := signup.RunServer(); err != nil {
		fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}
}
