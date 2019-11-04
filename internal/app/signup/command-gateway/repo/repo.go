package repo

import (
	"log"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

type SignupRepository interface {
	Produce()
}

func SignupCommandService() (cc *grpc.ClientConn) {
	sn := "cmd-delivery-orders"

	port := ds.GetConfig(sn).Port
	host := ds.GetConfig(sn).Host

	// Create the client TLS credentials
	creds, err := credentials.NewClientTLSFromFile("cert/cert.pem", "")
	if err != nil {
		log.Fatalf("Could not load tls cert: %s", err)
	}
	// Initiate a connection with the server
	cc, err = grpc.Dial(host+port, grpc.WithTransportCredentials(creds))
	if err != nil {
		log.Fatalf("Could not connect: %v", err)
	}

	return
}
