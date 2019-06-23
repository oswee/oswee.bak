package smartws

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/gorilla/websocket"
)

func NewMessageStreamHandler(u *websocket.Upgrader) (http.HandlerFunc, error) {
	if broker == nil {
		return nil, errors.New("Please run your broker with RunBroker")
	}
	return func(w http.ResponseWriter, r *http.Request) {
		conn, err := u.Upgrade(w, r, nil)
		if err != nil {
			fmt.Println("Error: Upgrade error:", err)
			return
		}
		defer conn.Close()

		cli := newWebSocketClient(conn)
		broker.addClient <- cli

		defer func() {
			broker.removeClient <- cli
		}()

		fmt.Printf("Info: client %s has joined chatrom", cli.ID())
		cli.Listen()
		fmt.Printf("Info: client %s has left chatrom", cli.ID())
	}, nil
}
