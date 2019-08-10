package client

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/lpar/gzipped"
)

//NewRouter is main routing entry point
func newRouter() *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/", indexGetHandler)
	router.HandleFunc("/favicon.ico", faviconGetHandler).Methods("GET")

	fs := gzipped.FileServer(http.Dir("../web/app/dist/"))

	router.
		PathPrefix("/dist/").
		Handler(http.StripPrefix("/dist/", fs))

	return router
}
