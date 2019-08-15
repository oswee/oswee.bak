protoc --proto_path=api/proto/v1 --proto_path=vendors --go_out=plugins=grpc:pkg/api/v1 todo-service.proto
protoc --proto_path=api/proto/v1 --proto_path=vendors --grpc-gateway_out=logtostderr=true:pkg/api/v1 todo-service.proto
protoc --proto_path=api/proto/v1 --proto_path=vendors --swagger_out=logtostderr=true:api/swagger/v1 todo-service.proto
