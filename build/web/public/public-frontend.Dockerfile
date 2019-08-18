# https://medium.com/@chemidy/create-the-smallest-and-secured-golang-docker-image-based-on-scratch-4752223b7324
# https://www.johnmiddleton.dev/docker/golang/containers/2019/08/17/docker-and-golang.html

FROM golang:1.12-alpine@sha256:1121c345b1489bb5e8a9a65b612c8fed53c175ce72ac1c76cf12bbfc35211310 AS builder
RUN apk update && apk add --no-cache git ca-certificates && update-ca-certificates
RUN adduser -D -g '' appuser
WORKDIR /build
COPY ./internal/web/public/app ./app
COPY ./internal/web/public/cmd ./cmd
COPY ./internal/web/public/web/app/dist ./web/app/dist
COPY ./internal/web/public/go.mod ./internal/web/public/go.sum ./
ENV GO111MODULE=on
RUN go mod download
RUN go mod verify
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -ldflags '-extldflags "-static"' -o main cmd/main.go

FROM scratch
LABEL maintainer="dzintars.klavins@gmail.com"
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /build .
USER appuser
EXPOSE 8080
CMD ["./main", "-http-port=8080", "-log-level=-1", "-log-time-format=2006-01-02T15:04:05.999999999Z07:00"] --v


# docker build --rm -t oswee/public-frontend:latest . -f build/web/public/public-frontend.Dockerfile