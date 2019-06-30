package main

import (
	"net/http"

	"github.com/oswee/oswee/pkg/session"
)

func Add(val1, val2 int) int {
	return val1 + val2
}

func Substact(val1, val2 int) int {
	return val1 - val2
}

func RootEndpoint(res http.ResponseWriter, req *http.Request) {
	//
}

func main() {
	session.Set("Dzintars")
}
