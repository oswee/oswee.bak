package main

import (
	"fmt"

	timestamp "github.com/golang/protobuf/ptypes/timestamp"
)

type Event struct {
	ID            string
	Type          string
	StakeholderID string
	AggregateID   string
	AggregateType string
	Payload       []byte
	Revision      int
	Time          *timestamp.Timestamp
}

func (e *Event) Read() {
	fmt.Println("Read:", string(e.Payload))
}

func (e *Event) Write() {
	fmt.Println("Write:", string(e.Payload))
}

type Reader interface {
	Read()
}

type Writer interface {
	Write()
}

// type ReadWriter interface {
// 	Reader
// 	Writer
// }

func rd(e Reader) {
	e.Read()
}

func wr(e Writer) {
	e.Write()
}

func main() {
	e := &Event{
		ID:      "wpoieufpowefu",
		Payload: []byte("Hello from payload"),
	}

	rd(e)
	wr(e)
}
