package main

import (
	"log"
	"net/http"

	"github.com/oswee/oswee/pkg/cmd/signin"
)

func main() {
	router := signin.NewRouter()
	log.Fatal(http.ListenAndServe(":8082", router))
}
