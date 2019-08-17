protoc --proto_path=api/proto/v1 --proto_path=../../vendor --go_out=plugins=grpc:pkg/api/v1 user-service.proto
protoc --proto_path=api/proto/v1 --proto_path=../../vendor --grpc-gateway_out=logtostderr=true:pkg/api/v1 user-service.proto
protoc --proto_path=api/proto/v1 --proto_path=../../vendor --swagger_out=logtostderr=true:api/swagger/v1 user-service.proto
