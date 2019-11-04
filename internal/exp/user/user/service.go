package user

type UserService interface {
	Get(id string) (*User, error)
	List() ([]*User, error)
}

type userService struct {
	repo UserRepository
}

func NewUserService(repo UserRepository) UserService {
	return &userService{
		repo,
	}
}

func (s *userService) Get(id string) (*User, error) {
	return s.repo.Get(id)
}

func (s *userService) List() ([]*User, error) {
	return s.repo.List()
}
