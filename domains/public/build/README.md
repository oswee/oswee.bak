# Docker

## Clear intermediate docker images

```sh
sudo docker rmi $(sudo docker images -f "dangling=true" -q)
```

These commands should be run from root directory and not from Dockerfile directory.

```sh
docker build --rm -t oswee/web-app:latest . -f build/Dockerfile
docker run --rm -it -p 8080:8080/tcp oswee/web-app:latest // Runs in interactive mode (see the logs)
docker run --rm -it -d -p 8080:8080/tcp oswee/web-app:latest // Runs in deattached (background) mode
docker run --rm -it -d -p 8080:8080/tcp --name web-app oswee/web-app:latest // Custom container name
```
