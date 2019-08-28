package user

import (
	"time"

	"github.com/oswee/oswee/pkg/entity"
)

//User data
type User struct {
	ID          entity.ID  `json:"id" bson:"_id,omitempty"`
	Picture     string     `json:"picture" bson:"picture,omitempty"`
	Email       string     `json:"email" bson:"email"`
	Password    string     `json:"password" bson:"password,omitempty"`
	Type        Type       `json:"type" bson:"type"`
	Company     []*Company `json:"company" bson:"company,omitempty"`
	CreatedAt   time.Time  `json:"created_at" bson:"created_at"`
	ValidatedAt time.Time  `json:"validated_at" bson:"validated_at,omitempty"`
}
