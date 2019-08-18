#!/bin/sh
protoc --proto_path=api/core/user/proto/v1 --proto_path=vendor --go_out=plugins=grpc:api/core/user/stubs/v1 user-service.proto
protoc --proto_path=api/core/user/proto/v1 --proto_path=vendor --grpc-gateway_out=logtostderr=true:api/core/user/stubs/v1 user-service.proto
protoc --proto_path=api/core/user/proto/v1 --proto_path=vendor --swagger_out=logtostderr=true:api/core/user/swagger/v1 user-service.proto