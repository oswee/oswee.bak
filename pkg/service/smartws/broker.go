package smartws

import (
	"context"
	"fmt"
)

type Payload struct {
	Username string `json:"username"`
	Message  string `json:"message"`

	RoomID string `json:"room_id"`
}

var broker *MessageBroker

func RunBroker(ctx context.Context) {
	broker = &MessageBroker{
		ctx:          ctx,
		clientByID:   make(map[string]Client),
		cancelByID:   make(map[string]context.CancelFunc),
		broadcast:    make(chan Payload),
		addClient:    make(chan Client),
		removeClient: make(chan Client),
	}

	go broker.loop()
}

type MessageBroker struct {
	ctx          context.Context
	clientByID   map[string]Client
	cancelByID   map[string]context.CancelFunc
	broadcast    chan Payload
	addClient    chan Client
	removeClient chan Client

	groupByRoomID map[string][]Client
}

func (mb *MessageBroker) loop() {
	for {
		select {
		case <-mb.ctx.Done():
			fmt.Println("Info: Broker loop has terminated")
			return
		case rm := <-mb.broadcast:
			mb.handleBroadcast(rm)
		case c := <-mb.addClient:
			mb.handleAddClient(c)
		case c := <-mb.removeClient:
			mb.handleRemoveClient(c)
		}
	}
}

func (mb *MessageBroker) handleBroadcast(p Payload) {
	for id := range mb.clientByID {
		select {
		case mb.clientByID[id].WriteQueue() <- p:
		default:
		}
	}
}

func (mb *MessageBroker) handleAddClient(c Client) {
	childCtx, cancel := context.WithCancel(mb.ctx)
	mb.clientByID[c.ID()] = c
	mb.cancelByID[c.ID()] = cancel
	c.SetBroadcast(mb.broadcast)
	c.Activate(childCtx)
}

func (mb *MessageBroker) handleRemoveClient(c Client) {
	mb.cancelByID[c.ID()]()
	delete(mb.cancelByID, c.ID())
	delete(mb.clientByID, c.ID())
}
