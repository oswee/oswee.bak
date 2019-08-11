FROM golang:1.12-alpine AS builder
RUN apk --no-cache add bash ca-certificates git gcc g++ libc-dev
ENV GO111MODULE=on
RUN mkdir /build 
WORKDIR /build
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -ldflags '-extldflags "-static"' -o main .
RUN ls

FROM scratch
LABEL maintainer="dzintars.klavins@gmail.com"
RUN mkdir /app
WORKDIR /app
RUN pwd
COPY --from=builder /build .
RUN ls
EXPOSE 8080
CMD ["./main -http-port=8080 -log-level=-1 -log-time-format=2006-01-02T15:04:05.999999999Z07:00"]

# docker build -t oswee/web-app:latest . -f build/Dockerfile
# docker run --rm -d -p 9090:8080 oswee/web-app:latest --name web-app