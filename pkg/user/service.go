package user

import "github.com/oswee/oswee/pkg/entity"

// Service service interface
type Service interface {
	Register(user *User) (entity.ID, error)
	ForgotPassword(user *User) error
	ChangePassword(user *User, password string) error
	Validate(user *User) error
	Auth(user *User, password string) error
	IsValid(user *User) bool
	GetRepo() Repository
}
