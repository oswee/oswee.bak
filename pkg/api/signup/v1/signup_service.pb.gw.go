// Code generated by protoc-gen-grpc-gateway. DO NOT EDIT.
// source: signup_service.proto

/*
Package v1 is a reverse proxy.

It translates gRPC into RESTful JSON APIs.
*/
package v1

import (
	"context"
	"io"
	"net/http"

	"github.com/golang/protobuf/proto"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/grpc-ecosystem/grpc-gateway/utilities"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/status"
)

var _ codes.Code
var _ io.Reader
var _ status.Status
var _ = runtime.String
var _ = utilities.NewDoubleArray

func request_SignupCmdService_Create_0(ctx context.Context, marshaler runtime.Marshaler, client SignupCmdServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq CreateSignupRequest
	var metadata runtime.ServerMetadata

	newReader, berr := utilities.IOReaderFactory(req.Body)
	if berr != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", berr)
	}
	if err := marshaler.NewDecoder(newReader()).Decode(&protoReq); err != nil && err != io.EOF {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

	msg, err := client.Create(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

// RegisterSignupCmdServiceHandlerFromEndpoint is same as RegisterSignupCmdServiceHandler but
// automatically dials to "endpoint" and closes the connection when "ctx" gets done.
func RegisterSignupCmdServiceHandlerFromEndpoint(ctx context.Context, mux *runtime.ServeMux, endpoint string, opts []grpc.DialOption) (err error) {
	conn, err := grpc.Dial(endpoint, opts...)
	if err != nil {
		return err
	}
	defer func() {
		if err != nil {
			if cerr := conn.Close(); cerr != nil {
				grpclog.Infof("Failed to close conn to %s: %v", endpoint, cerr)
			}
			return
		}
		go func() {
			<-ctx.Done()
			if cerr := conn.Close(); cerr != nil {
				grpclog.Infof("Failed to close conn to %s: %v", endpoint, cerr)
			}
		}()
	}()

	return RegisterSignupCmdServiceHandler(ctx, mux, conn)
}

// RegisterSignupCmdServiceHandler registers the http handlers for service SignupCmdService to "mux".
// The handlers forward requests to the grpc endpoint over "conn".
func RegisterSignupCmdServiceHandler(ctx context.Context, mux *runtime.ServeMux, conn *grpc.ClientConn) error {
	return RegisterSignupCmdServiceHandlerClient(ctx, mux, NewSignupCmdServiceClient(conn))
}

// RegisterSignupCmdServiceHandlerClient registers the http handlers for service SignupCmdService
// to "mux". The handlers forward requests to the grpc endpoint over the given implementation of "SignupCmdServiceClient".
// Note: the gRPC framework executes interceptors within the gRPC handler. If the passed in "SignupCmdServiceClient"
// doesn't go through the normal gRPC flow (creating a gRPC client etc.) then it will be up to the passed in
// "SignupCmdServiceClient" to call the correct interceptors.
func RegisterSignupCmdServiceHandlerClient(ctx context.Context, mux *runtime.ServeMux, client SignupCmdServiceClient) error {

	mux.Handle("POST", pattern_SignupCmdService_Create_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_SignupCmdService_Create_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_SignupCmdService_Create_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	return nil
}

var (
	pattern_SignupCmdService_Create_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 2, 1}, []string{"v1", "signup"}, ""))
)

var (
	forward_SignupCmdService_Create_0 = runtime.ForwardResponseMessage
)
