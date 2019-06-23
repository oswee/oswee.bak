# Build and run command examples

go build .
./auth-command-service -grpc-port=12233 -log-level=-1 -log-time-format=2006-01-02T15:04:05.999999999Z07:00
./auth-command-service -grpc-port=12233 -http-port=8080 -log-level=-1 -log-time-format=2006-01-02T15:04:05.999999999Z07:00