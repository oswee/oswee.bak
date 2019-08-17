# https://medium.com/@chemidy/create-the-smallest-and-secured-golang-docker-image-based-on-scratch-4752223b7324
# https://www.johnmiddleton.dev/docker/golang/containers/2019/08/17/docker-and-golang.html

############################
# STEP 1 build executable binary
############################
FROM golang:1.12-alpine@sha256:1121c345b1489bb5e8a9a65b612c8fed53c175ce72ac1c76cf12bbfc35211310 AS builder
# Install git + SSL ca certificates.
# Git is required for fetching the dependencies.
# Ca-certificates is required to call HTTPS endpoints.
RUN apk update && apk add --no-cache git ca-certificates && update-ca-certificates
# Create appuser
RUN adduser -D -g '' appuser
WORKDIR /build
COPY . .
# COPY go.mod go.sum ./
# Fetch dependencies.
# Using go mod with go 1.11
ENV GO111MODULE=on
RUN go mod download
RUN go mod verify
# Build the binary
# RUN GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o web-app cmd/main.go
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -ldflags '-extldflags "-static"' -o main ./cmd/main.go

############################
# STEP 2 build a small image
############################
FROM scratch
LABEL maintainer="dzintars.klavins@gmail.com"
# LABEL author="dzintars.klavins@gmail.com"
# Import from builder.
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /etc/passwd /etc/passwd
# Copy our static executable
COPY --from=builder /build .
# Use an unprivileged user.
USER appuser
# Run the hello binary.
EXPOSE 8080
EXPOSE 9090
CMD ["./main", "-grpc-port=9090", "-http-port=8080", "-db-host=localhost:3306", "-db-user=root", "-db-password=root", "-db-schema=user", "-log-level=-1", "-log-time-format=2006-01-02T15:04:05.999999999Z07:00"] --v


# docker build --rm -t oswee/user-command-gateway:latest . -f build/Dockerfile
# docker run --rm -it -p 9090:9090/tcp -p 8080:8080/tcp oswee/user-command-gateway:latest // Runs in interactive mode (see the logs)
# docker run --rm -it -d -p 9090:9090/tcp -p 8080:8080/tcp oswee/user-command-gateway:latest // Runs in deattached (background) mode
# docker run --rm -it -d -p 9090:9090/tcp -p 8080:8080/tcp --name user-command-gateway oswee/user-command-gateway:latest // Custom container name