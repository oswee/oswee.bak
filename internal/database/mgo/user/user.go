package user

import (
	"os"

	"github.com/juju/mgosession"
	"github.com/oswee/oswee/pkg/entity"
	"gopkg.in/mgo.v2/bson"
)

type repo struct {
	pool *mgosession.Pool
}

//NewMongoRepository create new repository
func NewMongoRepository(p *mgosession.Pool) Repository {
	return &repo{
		pool: p,
	}
}

func (r *repo) Find(id entity.ID) (*User, error) {
	result := User{}
	session := r.pool.Session(nil)
	coll := session.DB(os.Getenv("MONGODB_DATABASE")).C("user")
	err := coll.Find(bson.M{"_id": id}).One(&result)
	if err != nil {
		return nil, err
	}
	return &result, nil
}

func (r *repo) FindByEmail(email string) (*User, error) {
}

func (r *repo) FindByChangePasswordHash(hash string) (*User, error) {
}

func (r *repo) FindAll() ([]*User, error) {
}

func (r *repo) Update(user *User) error {
}

func (r *repo) Store(user *User) (entity.ID, error) {
}

func (r *repo) AddCompany(id entity.ID, company *Company) error {
}

func (r *repo) AddInvite(userID entity.ID, companyID entity.ID) error {
}

func (r *repo) FindByValidationHash(hash string) (*User, error) {
}
