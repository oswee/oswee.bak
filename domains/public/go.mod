module github.com/oswee/oswee/domains/public

go 1.12

require (
	github.com/golang/gddo v0.0.0-20190419222130-af0f2af80721 // indirect
	github.com/google/go-cmp v0.3.1 // indirect
	github.com/gorilla/mux v1.7.3
	github.com/lpar/gzipped v1.1.0
	github.com/oswee/oswee v0.0.0-20190811000004-a59369685954
	github.com/pkg/errors v0.8.1 // indirect
	github.com/stretchr/testify v1.3.0 // indirect
	go.uber.org/atomic v1.4.0 // indirect
	go.uber.org/multierr v1.1.0 // indirect
	go.uber.org/zap v1.10.0
)

replace github.com/oswee/oswee => ../../pkg/logger
