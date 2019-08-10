protoc --proto_path=domains/user/api/proto/v1 --proto_path=vendor --go_out=plugins=grpc:domains/user/pkg/api/v1 commands.proto
protoc --proto_path=domains/user/api/proto/v1 --proto_path=vendor --grpc-gateway_out=logtostderr=true:domains/user/pkg/api/v1 commands.proto
protoc --proto_path=domains/user/api/proto/v1 --proto_path=vendor --swagger_out=logtostderr=true:domains/user/api/swagger/v1 commands.proto

protoc --proto_path=domains/user/api/proto/v1 --proto_path=vendor --go_out=plugins=grpc:domains/user/pkg/api/v1 queries.proto
protoc --proto_path=domains/user/api/proto/v1 --proto_path=vendor --grpc-gateway_out=logtostderr=true:domains/user/pkg/api/v1 queries.proto
protoc --proto_path=domains/user/api/proto/v1 --proto_path=vendor --swagger_out=logtostderr=true:domains/user/api/swagger/v1 queries.proto