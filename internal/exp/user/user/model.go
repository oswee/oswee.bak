package user

type User struct {
	ID           string `json:"id" db:"id"`
	PrimaryEmail string `json:"primary_email" db:"primary_email"`
	DisplayName  string `json:"display_name" db:"display_name"`
}
