package client

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/lpar/gzipped"
)

func fileServer(r *mux.Router) {
	fs := http.FileServer(http.Dir("static"))
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", fs))
}

// https://github.com/lpar/gzipped

func stylesheets(r *mux.Router) {
	fs := gzipped.FileServer(http.Dir("static/assets/css"))
	r.PathPrefix("/static/assets/css/").Handler(http.StripPrefix("/static/assets/css/", fs))
}

// func javascript(r *mux.Router) {
// 	fs := gzipped.FileServer(http.Dir("static/assets/js"))
// 	r.PathPrefix("/static/assets/js/").Handler(http.StripPrefix("/static/assets/js/", fs))
// }
