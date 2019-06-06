package v1

import (
	"context"
	"database/sql"
	"time"

	uuid "github.com/nu7hatch/gouuid"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	v1 "github.com/oswee/oswee/pkg/api/signup/v1"
)

const (
	// apiVersion is version of API is provided by server
	apiVersion = "v1"
)

// signupServiceServer is implementation of v1.SignupServiceServer proto interface
type signupCmdServiceServer struct {
	db *sql.DB
}

// NewSignupCmdServiceServer creates Signup service
func NewSignupCmdServiceServer(db *sql.DB) v1.SignupCmdServiceServer {
	return &signupCmdServiceServer{db: db}
}

// checkAPI checks if the API version requested by client is supported by server
func (s *signupCmdServiceServer) checkAPI(api string) error {
	// API version is "" means use current version of the service
	if len(api) > 0 {
		if apiVersion != api {
			return status.Errorf(codes.Unimplemented,
				"unsupported API version: service implements API version '%s', but asked for '%s'", apiVersion, api)
		}
	}
	return nil
}

// connect returns SQL database connection from the pool
func (s *signupCmdServiceServer) connect(ctx context.Context) (*sql.Conn, error) {
	c, err := s.db.Conn(ctx)
	if err != nil {
		return nil, status.Error(codes.Unknown, "failed to connect to database-> "+err.Error())
	}
	return c, nil
}

// Create new Signup
func (s *signupCmdServiceServer) Create(ctx context.Context, req *v1.CreateSignupRequest) (*v1.CreateSignupResponse, error) {
	// check if the API version requested by client is supported by server
	if err := s.checkAPI(req.Api); err != nil {
		return nil, err
	}

	// get SQL connection from pool
	c, err := s.connect(ctx)
	if err != nil {
		return nil, err
	}
	defer c.Close()

	u, _ := uuid.NewV4()
	uuid := u.String()

	// insert Signup entity data
	res, err := c.ExecContext(ctx, "INSERT INTO signup(`uuid`, `email`, `display_name`, `password`, `create_time`) VALUES(?, ?, ?, ?, ?)",
		uuid, req.Payload.Email, req.Payload.DisplayName, req.Payload.Password, time.Now())
	if err != nil {
		return nil, status.Error(codes.Unknown, "failed to insert into Signups-> "+err.Error())
	}

	// get ID of created Signup
	_, err1 := res.LastInsertId()
	if err1 != nil {
		return nil, status.Error(codes.Unknown, "failed to retrieve id for created Signup request-> "+err.Error())
	}

	return &v1.CreateSignupResponse{
		Api:  apiVersion,
		Uuid: []byte(uuid),
	}, nil
}
