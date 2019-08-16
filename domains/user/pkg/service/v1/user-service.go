package v1

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/gofrs/uuid"
	v1 "github.com/oswee/oswee/domains/user/pkg/api/v1"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

const (
	// apiVersion is version of API is provided by server
	apiVersion = "v1"
)

// userServiceServer is implementation of v1.UserServiceServer proto interface
type userCommandServiceServer struct {
	db *sql.DB
}

// NewUserCommandServiceServer creates User service
func NewUserCommandServiceServer(db *sql.DB) v1.UserCommandServiceServer {
	return &userCommandServiceServer{db: db}
}

// checkAPI checks if the API version requested by client is supported by server
func (s *userCommandServiceServer) checkAPI(api string) error {
	// API version is "" means use current version of the service
	if len(api) > 0 {
		if apiVersion != api {
			return status.Errorf(codes.Unimplemented,
				"unsupported API version: service implements API version '%s', but asked for '%s'", apiVersion, api)
		}
	}
	return nil
}

// TODO: Remove it from there
// connect returns SQL database connection from the pool
func (s *userCommandServiceServer) connect(ctx context.Context) (*sql.Conn, error) {
	c, err := s.db.Conn(ctx)
	if err != nil {
		return nil, status.Error(codes.Unknown, "failed to connect to database-> "+err.Error())
	}
	return c, nil
}

// CreateSignupRequest new Signup request
func (s *userCommandServiceServer) CreateSignup(ctx context.Context, req *v1.CreateSignupRequest) (*v1.CreateSignupResponse, error) {
	// check if the API version requested by client is supported by server
	if err := s.checkAPI(req.Api); err != nil {
		return nil, err
	}

	apiVersion := "v1"

	u, err := uuid.NewV4()
	if err != nil {
		fmt.Println(err)
	}

	return &v1.CreateSignupResponse{
		Api:  apiVersion,
		Uuid: u.Bytes(),
	}, nil
}
