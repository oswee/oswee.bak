package main

import (
	"fmt"
	"net/http"

	"github.com/oswee/oswee/pkg/cmd/smartws"
)

func main() {
	smartws.SmartSetup()

	fmt.Println("SmartWS server running on 7072")

	err := http.ListenAndServe(":7072", nil)
	if err != nil {
		fmt.Println("Server error", err)
	}
}
