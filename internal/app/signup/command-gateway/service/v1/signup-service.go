package v1

import (
	"context"

	pb "github.com/golang/protobuf/ptypes/empty"
	v1 "github.com/oswee/oswee/api/core/signup/stubs/v1"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

const (
	// apiVersion is version of API is provided by server
	apiVersion = "v1"
)

// signupCommandServiceServer is implementation of v1.SignupCommandServiceServer proto interface
type signupCommandServiceServer struct{}

// NewSignupCommandServiceServer creates ToDo service
func NewSignupCommandServiceServer() v1.SignupCommandServiceServer {
	return &signupCommandServiceServer{}
}

// checkAPI checks if the API version requested by client is supported by server
func (s *signupCommandServiceServer) checkAPI(api string) error {
	// API version is "" means use current version of the service
	if len(api) > 0 {
		if apiVersion != api {
			return status.Errorf(codes.Unimplemented,
				"unsupported API version: service implements API version '%s', but asked for '%s'", apiVersion, api)
		}
	}
	return nil
}

// Create new todo task
func (s *signupCommandServiceServer) Create(ctx context.Context, req *v1.CreateRequest) (*pb.Empty, error) {
	// check if the API version requested by client is supported by server
	if err := s.checkAPI(req.Api); err != nil {
		return nil, err
	}

	return nil, nil
}
