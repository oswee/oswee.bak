FROM golang:1.12-alpine AS builder
RUN apk add bash ca-certificates git gcc g++ libc-dev
ENV GO111MODULE=on
RUN mkdir /build 
RUN bash -c 'mkdir -p /build/{cmd/exp/test/,internal/exp/test,web/static,pkg}'
WORKDIR /build
COPY go.mod go.sum ./
RUN go mod download
COPY cmd/exp/test/ ./cmd/exp/test/
COPY internal/exp/test/ ./internal/exp/test/
COPY web/static/ ./web/static/
COPY pkg ./pkg
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -ldflags '-extldflags "-static"' -o test-app-main ./cmd/exp/test/

FROM scratch
LABEL maintainer="dzintars.klavins@gmail.com"
WORKDIR /app
COPY --from=builder /build .
EXPOSE 8080
CMD ["./test-app-mainx -http-port=8080 -log-level=-1 -log-time-format=2006-01-02T15:04:05.999999999Z07:00"]
