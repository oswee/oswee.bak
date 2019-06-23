package v1

import (
	"context"

	uuid "github.com/nu7hatch/gouuid"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	v1 "github.com/dzintars/project-layout/pkg/api/v1"
)

const (
	// apiVersion is version of API is provided by server
	apiVersion = "v1"
)

// signupServiceServer is implementation of v1.SignupServiceServer proto interface
type authCommandServiceServer struct{}

// NewAuthCommandServiceServer creates Signup service
func NewAuthCommandServiceServer() v1.AuthCommandServiceServer {
	return &authCommandServiceServer{}
}

// checkAPI checks if the API version requested by client is supported by server
func (s *authCommandServiceServer) checkAPI(api string) error {
	// API version is "" means use current version of the service
	if len(api) > 0 {
		if apiVersion != api {
			return status.Errorf(codes.Unimplemented,
				"unsupported API version: service implements API version '%s', but asked for '%s'", apiVersion, api)
		}
	}
	return nil
}

// Create new Signup
func (s *authCommandServiceServer) SignUp(ctx context.Context, req *v1.SignUpReq) (*v1.SignUpRes, error) {
	// check if the API version requested by client is supported by server
	if err := s.checkAPI(req.Api); err != nil {
		return nil, err
	}

	u, _ := uuid.NewV4()
	uuid := u.String()

	return &v1.SignUpRes{
		Api:  apiVersion,
		Uuid: []byte(uuid),
	}, nil
}
