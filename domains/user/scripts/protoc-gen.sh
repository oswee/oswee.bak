protoc --proto_path=api/proto/v1/user --proto_path=vendor --go_out=plugins=grpc:pkg/api/v1/user commands.proto
protoc --proto_path=api/proto/v1/user --proto_path=vendor --grpc-gateway_out=logtostderr=true:pkg/api/v1/user commands.proto
protoc --proto_path=api/proto/v1/user --proto_path=vendor --swagger_out=logtostderr=true:api/swagger/v1/user commands.proto

protoc --proto_path=api/proto/v1/user --proto_path=vendor --go_out=plugins=grpc:pkg/api/v1/user queries.proto
protoc --proto_path=api/proto/v1/user --proto_path=vendor --grpc-gateway_out=logtostderr=true:pkg/api/v1/user queries.proto
protoc --proto_path=api/proto/v1/user --proto_path=vendor --swagger_out=logtostderr=true:api/swagger/v1/user queries.proto