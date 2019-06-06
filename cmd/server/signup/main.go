package main

import (
	"fmt"
	"os"

	"github.com/oswee/oswee/pkg/cmd/signup"
)

func main() {
	if err := signup.RunServer(); err != nil {
		fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}
}
