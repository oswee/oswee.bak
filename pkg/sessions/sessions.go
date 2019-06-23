package sessions

import (
	"net/http"

	"github.com/dzintars/project-layout/pkg/logger"
	"github.com/gorilla/sessions"
	"go.uber.org/zap"
)

// TODO: Secret should be implemented in Configuration Service.

var Store = sessions.NewCookieStore([]byte("t0p-s3crt"))

// HandleSessionError ...
func HandleSessionError(w http.ResponseWriter, err error) {
	logger.Log.Info("Error handling session.", zap.String("reason", err.Error()))
	http.Error(w, "Application Error", http.StatusInternalServerError)
}
