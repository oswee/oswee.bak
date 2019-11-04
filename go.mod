module github.com/oswee/oswee

go 1.12

require (
	github.com/go-redis/redis v6.15.2+incompatible
	github.com/go-sql-driver/mysql v1.4.1
	github.com/golang/protobuf v1.3.2
	github.com/google/uuid v1.1.1
	github.com/gorilla/mux v1.7.3
	github.com/grpc-ecosystem/go-grpc-middleware v1.0.0
	github.com/grpc-ecosystem/grpc-gateway v1.9.6
	github.com/juju/mgosession v1.0.0
	github.com/lib/pq v1.2.0
	github.com/oswee/logger v0.0.0-20190815133410-3d0b4b0cca0a
	github.com/oswee/oswee/internal/core/user/command-gateway v0.0.0-20190818155527-283750b33eaa
	github.com/oswee/oswee/internal/web/public v0.0.0-20190818155527-283750b33eaa // indirect
	github.com/oswee/oswee/pkg/logger v0.0.0-20190818155527-283750b33eaa
	go.uber.org/zap v1.10.0
	google.golang.org/genproto v0.0.0-20190817000702-55e96fffbd48
	google.golang.org/grpc v1.23.0
	gopkg.in/mgo.v2 v2.0.0-20190816093944-a6b53ec6cb22
)
