FROM golang:1.11-alpine as builder
RUN apk add bash ca-certificates git gcc g++ libc-dev
RUN mkdir /build 
WORKDIR /build
COPY ../go.mod ../go.sum ./
# COPY go.sum .
ENV GO111MODULE=on
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -ldflags '-extldflags "-static"' -o main .

FROM scratch
COPY --from=builder /build/main /app/
COPY config.yaml /app
ENV SERVICE_PORT=9000
EXPOSE 9000
WORKDIR /app
CMD ["./main"]


# docker build -t oswee/discovery:latest . -f scratch.Dockerfile
# docker run --rm -d -p 9000:9000 oswee/discovery:latest --name discovery

### Test 2nd Traefik docker container
# docker run -d --label "traefik.frontend.rule=Host:oswee.com" --network web nginx:latest

# Yeeee!!! 2019 JAN 6