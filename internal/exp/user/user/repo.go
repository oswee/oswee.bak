package user

type UserRepository interface {
	Get(id string) (*User, error)
	List() ([]*User, error)
}
