package signin

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/oswee/oswee/pkg/sessions"
)

// SignIn ...
func SignIn(w http.ResponseWriter, r *http.Request) {
	setHeaders(&w, r)

	if (*r).Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	type credentials struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	var c credentials
	// https://stackoverflow.com/questions/15672556/handling-json-post-request-in-go
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&c)
	if err != nil {
		panic(err)
	}

	fmt.Println("Signin request:", c)
	// fmt.Fprintf(w, "Simple Server")

	type sessionRes struct {
		Live  bool   `json:"live"`
		Email string `json:"email"`
	}

	var sessionState bool

	// User validation goes there!!!
	if c.Email == "dzintars.klavins@gmail.com" {
		session, _ := sessions.Store.Get(r, "SSID")
		session.Values["stakeholderUUID"] = "2229215a-68f4-453f-ad88-7e2fac0bdaf6"
		session.Values["userUUID"] = "170e66b7-fa1f-4bc4-a833-6b8deed42805"
		session.Options.Domain = "localhost"
		session.Options.Path = "/"
		session.Options.HttpOnly = true // Unable to read from javascript with document.cookie
		session.Options.Secure = false
		if err := session.Save(r, w); err != nil {
			sessions.HandleSessionError(w, err)
			return
		}
		sessionState = true

		w.WriteHeader(http.StatusOK)
	}

	w.WriteHeader(http.StatusBadRequest)
	json.NewEncoder(w).Encode(sessionRes{
		sessionState,
		c.Email,
	})
}

// SignOut ...
func SignOut(w http.ResponseWriter, r *http.Request) {
	setHeaders(&w, r)

	fmt.Println("Signout request:")
	session, _ := sessions.Store.Get(r, "SSID")
	session.Options.Domain = "localhost"
	session.Options.Path = "/"
	// Expiring session
	session.Options.MaxAge = -1
	if err := session.Save(r, w); err != nil {
		sessions.HandleSessionError(w, err)
		return
	}

	type response struct {
		Live bool `json:"live"`
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(response{
		false,
	})
	http.Redirect(w, r, "/", 302)
}

func setHeaders(w *http.ResponseWriter, r *http.Request) {
	(*w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	// (*w).Header().Set("Access-Control-Allow-Origin", "https://oswee.com")
	(*w).Header().Set("Access-Control-Allow-Credentials", "true")
	(*w).Header().Set("Content-Type", "application/json; charset=utf-8")
	// (*w).Header().Set("Content-Encoding", "gzip")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PATCH, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, origin, x-requested-with, Cache-Control, X-App-Token, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}
