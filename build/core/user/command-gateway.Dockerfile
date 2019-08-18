# https://medium.com/@chemidy/create-the-smallest-and-secured-golang-docker-image-based-on-scratch-4752223b7324
# https://www.johnmiddleton.dev/docker/golang/containers/2019/08/17/docker-and-golang.html

FROM golang:1.12-alpine@sha256:1121c345b1489bb5e8a9a65b612c8fed53c175ce72ac1c76cf12bbfc35211310 AS builder
RUN apk update && apk add --no-cache git ca-certificates && update-ca-certificates
RUN adduser -D -g '' appuser
WORKDIR /build
COPY ./internal/core/user/command-gateway .
ENV GO111MODULE=on
RUN go mod download
RUN go mod verify
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -ldflags '-extldflags "-static"' -o main ./cmd/main.go

FROM scratch
LABEL maintainer="dzintars.klavins@gmail.com"
# LABEL author="dzintars.klavins@gmail.com"
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /build .
USER appuser
EXPOSE 8080
EXPOSE 9090
CMD ["./main", "-grpc-port=9090", "-http-port=8080", "-db-host=localhost:3306", "-db-user=root", "-db-password=root", "-db-schema=user", "-log-level=-1", "-log-time-format=2006-01-02T15:04:05.999999999Z07:00"] --v


# docker build --rm -t oswee/user-command-gateway:latest . -f build/core/user/command-gateway.Dockerfile

# docker run --rm -it -p 9090:9090/tcp -p 8080:8080/tcp oswee/user-command-gateway:latest // Runs in interactive mode (see the logs)
# docker run --rm -it -d -p 9090:9090/tcp -p 8080:8080/tcp oswee/user-command-gateway:latest // Runs in deattached (background) mode
# docker run --rm -it -d -p 9090:9090/tcp -p 8080:8080/tcp --name user-command-gateway oswee/user-command-gateway:latest // Custom container name