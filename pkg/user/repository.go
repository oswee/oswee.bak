package user

import "github.com/oswee/oswee/pkg/entity"

//Repository repository interface
type Repository interface {
	Find(id entity.ID) (*User, error)
	FindByEmail(email string) (*User, error)
	FindByChangePasswordHash(hash string) (*User, error)
	FindByValidationHash(hash string) (*User, error)
	FindAll() ([]*User, error)
	Update(user *User) error
	Store(user *User) (entity.ID, error)
	AddCompany(id entity.ID, company *Company) error
	AddInvite(userID entity.ID, companyID entity.ID) error
}
