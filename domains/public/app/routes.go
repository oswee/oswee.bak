package app

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/lpar/gzipped"
)

//NewRouter is main routing entry point
func newRouter() *mux.Router {
	router := mux.NewRouter().StrictSlash(true)

	// TODO: This is a dumb workaround. Need to make "any-path except static/dist" to resolve index.html
	// or just simply serve dist directory where index.html should be picked up automatically by browsers.
	router.HandleFunc("/", indexGetHandler)
	router.HandleFunc("/marketplace", indexGetHandler)
	router.HandleFunc("/services", indexGetHandler)
	router.HandleFunc("/organizations", indexGetHandler)
	router.HandleFunc("/organizations", indexGetHandler)
	router.HandleFunc("/apps", indexGetHandler)
	router.HandleFunc("/apps/routeplanner", indexGetHandler)
	router.HandleFunc("/about", indexGetHandler)
	router.HandleFunc("/signin", indexGetHandler)
	router.HandleFunc("/signup", indexGetHandler)
	router.HandleFunc("/restore-password", indexGetHandler)
	router.HandleFunc("/favicon.ico", faviconGetHandler).Methods(http.MethodGet)

	fs := gzipped.FileServer(http.Dir("./web/app/dist/"))

	router.
		PathPrefix("/dist/").
		Handler(http.StripPrefix("/dist/", fs))

	return router
}
