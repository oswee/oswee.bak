package smartws

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"github.com/gofrs/uuid"
	"github.com/gorilla/websocket"
)

func getUUID() string {
	u, _ := uuid.NewV4()
	return u.String()
}

func newWebSocketClient(c *websocket.Conn) Client {
	return &WebSocketClient{
		id:    getUUID(),
		conn:  c,
		read:  make(chan json.RawMessage, 100),
		write: make(chan Payload, 100),
	}
}

type Client interface {
	ID() string
	Listen()
	Activate(ctx context.Context)
	WriteQueue() chan<- Payload
	SetBroadcast(chan Payload)
}

type WebSocketClient struct {
	id        string
	conn      *websocket.Conn
	read      chan json.RawMessage
	write     chan Payload
	broadcast chan Payload
}

func (c *WebSocketClient) ID() string {
	return c.id
}

func (c *WebSocketClient) Listen() {
	for {
		_, bytes, err := c.conn.ReadMessage()
		if err != nil &&
			websocket.IsCloseError(err, websocket.CloseAbnormalClosure, websocket.CloseGoingAway) {
			return
		}
		if err != nil {
			fmt.Println("Error: client.go conn.ReadMessage", err)
			return
		}

		c.read <- bytes
	}
}

func (c *WebSocketClient) Activate(ctx context.Context) {
	go c.readLoop(ctx)
	go c.writeLoop(ctx)
}

func (c *WebSocketClient) WriteQueue() chan<- Payload {
	return c.write
}

func (c *WebSocketClient) SetBroadcast(ch chan Payload) {
	c.broadcast = ch
}

func (c *WebSocketClient) readLoop(ctx context.Context) {
	c.conn.SetReadDeadline(time.Now().Add(2 * time.Second))
	c.conn.SetPongHandler(func(s string) error {
		c.conn.SetReadDeadline(time.Now().Add(2 * time.Second))
		return nil
	})
	for {
		select {
		// If context is canceled, need to kill gourutine
		case <-ctx.Done():
			fmt.Printf("Info: client %s has terminated read loop", c.id)
			return
			// Read all the messages from channel
		case raw := <-c.read:
			c.conn.SetReadDeadline(time.Now().Add(2 * time.Second))
			p := Payload{}

			err := json.Unmarshal(raw, &p)
			if err != nil {
				fmt.Printf("Error: json.Unmarshal", err)
				continue
			}
			fmt.Println("Message:", p)
			c.broadcast <- p
		}
	}
}

func (c *WebSocketClient) writeLoop(ctx context.Context) {
	ticker := time.NewTicker(1 * time.Second)
	defer ticker.Stop()

	for {
		select {
		case <-ctx.Done():
			fmt.Printf("Info: client %s has terminated write loop", c.id)
			return
		case p := <-c.write:
			c.conn.SetWriteDeadline(time.Now().Add(5 * time.Second))
			bytes, err := json.Marshal(p)
			if err != nil {
				fmt.Printf("Error: json.Marshal", err)
				continue
			}

			err = c.conn.WriteMessage(websocket.TextMessage, bytes)
			if err != nil {
				return
			}
		case <-ticker.C:
			c.conn.SetWriteDeadline(time.Now().Add(5 * time.Second))
			err := c.conn.WriteMessage(websocket.PingMessage, []byte{})
			if err != nil {
				return
			}
		}
	}
}
