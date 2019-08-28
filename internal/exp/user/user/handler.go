package user

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

type UserHandler interface {
	Get(w http.ResponseWriter, r *http.Request)
	GetById(w http.ResponseWriter, r *http.Request)
}

type userHandler struct {
	userService UserService
}

func NewUserHandler(userService UserService) UserHandler {
	return &userHandler{
		userService,
	}
}

func (h *userHandler) Get(w http.ResponseWriter, r *http.Request) {
	users, _ := h.userService.FindAllUsers()

	response, _ := json.Marshal(users)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write(response)
}

func (h *userHandler) GetById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	user, _ := h.userService.FindUserById(id)

	response, _ := json.Marshal(user)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write(response)
}
