package signin

import (
	"net/http"
)

type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

type routes []Route

var Routes = routes{
	Route{
		"SignIn",
		"OPTIONS",
		"/v1/session",
		SignIn,
	},
	Route{
		"SignIn",
		"POST",
		"/v1/session",
		SignIn,
	},
	Route{
		"SignIn",
		"DELETE",
		"/v1/session",
		SignOut,
	},
}
