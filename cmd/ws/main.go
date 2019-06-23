package main

import (
	"fmt"
	"net/http"

	"github.com/oswee/oswee/pkg/cmd/websocket"
)

// https://tutorialedge.net/projects/chat-system-in-go-and-react/part-4-handling-multiple-clients/

func main() {
	fmt.Println("Distributed Chat App v0.01")
	websocket.SetupRoutes()
	http.ListenAndServe(":7070", nil)
}
