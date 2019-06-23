package smartws

import (
	"context"
	"net/http"

	"github.com/dzintars/project-layout/pkg/service/smartws"
	"github.com/gorilla/websocket"
)

func SmartSetup() error {
	smartws.RunBroker(context.Background())

	upgrader := &websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool { return true },
	}

	streamHandler, err := smartws.NewMessageStreamHandler(upgrader)
	if err != nil {
		return err
	}

	// http.Handle("/", http.FileServer(http.Dir("web")))
	http.Handle("/v1/ws/private", streamHandler)
	return nil
}
