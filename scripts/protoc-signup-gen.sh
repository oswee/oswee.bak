#!/bin/sh

protoc \
    --proto_path=api/core/signup/proto/v1 \
    --proto_path=vendor \
    --go_out=plugins=grpc:api/core/signup/stubs/v1 \
    signup-command-service.proto

protoc \
    --proto_path=api/core/signup/proto/v1 \
    --proto_path=vendor \
    --grpc-gateway_out=logtostderr=true:api/core/signup/stubs/v1 \
    signup-command-service.proto

protoc \
    --proto_path=api/core/signup/proto/v1 \
    --proto_path=vendor \
    --swagger_out=logtostderr=true:api/core/signup/swagger/v1 \
    signup-command-service.proto