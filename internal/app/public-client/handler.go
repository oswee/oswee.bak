package client

import (
	"net/http"
)

// staticIndexGetHandler serves html file from dist directory which is generated, maintained by Webpack
func indexGetHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	http.ServeFile(w, r, "../../../../web/app/public/dist/index.html")
	// w.WriteHeader(http.StatusOK)
}
