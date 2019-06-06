package main

import (
	"context"
	"flag"
	"log"
	"time"

	// "github.com/golang/protobuf/ptypes"
	"google.golang.org/grpc"

	v1 "github.com/oswee/oswee/pkg/api/signup/v1"
)

const (
	// apiVersion is version of API is provided by server
	apiVersion = "v1"
)

func main() {
	// get configuration
	address := flag.String("server", "", "gRPC server in format host:port")
	flag.Parse()

	// Set up a connection to the server.
	conn, err := grpc.Dial(*address, grpc.WithInsecure())
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()

	c := v1.NewSignupCmdServiceClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// t := time.Now().In(time.UTC)
	// reminder, _ := ptypes.TimestampProto(t)
	// pfx := t.Format(time.RFC3339Nano)

	// Call Create
	req1 := v1.CreateSignupRequest{
		Api: apiVersion,
		Payload: &v1.CreateSignupPayload{
			DisplayName: "Some gRPC name",
			Email:       "some@some.com",
			Password:    "passwordqqq",
		},
	}
	res1, err := c.Create(ctx, &req1)
	if err != nil {
		log.Fatalf("Create failed: %v", err)
	}
	log.Printf("Create result: <%+v>\n\n", res1)

	// id := res1.Uuid
}
