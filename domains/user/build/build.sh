#!/bin/sh
echo Building oswee/test-app:dev

docker build -t oswee/test-app:dev . -f build/test-app/Dockerfile
docker run --rm -d -p 9111:8080 oswee/test-app:dev --name oswee/test-app