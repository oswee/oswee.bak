module github.com/oswee/oswee

go 1.12

require (
	github.com/go-redis/redis v6.15.2+incompatible
	github.com/go-sql-driver/mysql v1.4.1
	github.com/golang/protobuf v1.3.2
	github.com/google/uuid v1.1.1
	github.com/gorilla/mux v1.7.3
	github.com/grpc-ecosystem/grpc-gateway v1.9.6
	github.com/lib/pq v1.2.0
	github.com/oswee/oswee/internal/core/user/command-gateway v0.0.0-20190818155527-283750b33eaa
	github.com/oswee/oswee/pkg/logger v0.0.0-20190818155527-283750b33eaa
	google.golang.org/genproto v0.0.0-20190817000702-55e96fffbd48
	google.golang.org/grpc v1.23.0
)
