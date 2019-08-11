# https://medium.com/@chemidy/create-the-smallest-and-secured-golang-docker-image-based-on-scratch-4752223b7324

############################
# STEP 1 build executable binary
############################
FROM golang@sha256:cee6f4b901543e8e3f20da3a4f7caac6ea643fd5a46201c3c2387183a332d989 AS builder
# Install git + SSL ca certificates.
# Git is required for fetching the dependencies.
# Ca-certificates is required to call HTTPS endpoints.
RUN apk update && apk add --no-cache git ca-certificates && update-ca-certificates
# Create appuser
RUN adduser -D -g '' appuser
WORKDIR $GOPATH/src/github.com/oswee/oswee/
COPY . .
# Fetch dependencies.
# Using go mod with go 1.11
ENV GO111MODULE=on
RUN go mod download
RUN go mod verify
# Build the binary
RUN GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o /go/bin/web-app
############################
# STEP 2 build a small image
############################
FROM scratch
# Import from builder.
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /etc/passwd /etc/passwd
# Copy our static executable
COPY --from=builder /go/bin/web-app /go/bin/web-app
# Use an unprivileged user.
USER appuser
# Run the hello binary.
# ENTRYPOINT ["/go/bin/web-app"]
EXPOSE 8080
CMD ["./go/bin/web-app -http-port=8080 -log-level=-1 -log-time-format=2006-01-02T15:04:05.999999999Z07:00"]