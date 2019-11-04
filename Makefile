.PHONY: build
EXENAME=user.command-gateway
build:
	go build -v -o ./build/artifacts/$(EXENAME) ./internal/core/user/command-gateway/cmd
	go build -v -o ./build/artifacts/frontend.public ./internal/web/public/cmd
.DEFAULT_GOAL := build
