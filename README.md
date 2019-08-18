# Oswee

This is a **personal** distributed microservices pet-project.

## Current state

Trying to capture progress log in [Wiki](https://github.com/oswee/oswee/wiki/Log)

## This project contains a stack of

### Back-end

- Go
- gRPC
- Protocol Buffers
- Kafka
- Event-Sourcing/CQRS
- MariaDB
- Redis

### Front-end

- TypeScript
- Web Components
- LitElement
- Lit-html
- Redux
- Redux Sagas
- SCSS/SMACSS
- PWA
- WebPack

### Infrastructure

Currently mix of development Docker, Traefik and Go binaries.
I already set up home-lab OpenShift 4 HA cluster and SLOWLY learning how to set up full development pipeline based on self hosted envirionment.

### Project structure

Back-End project structure is inspired by Golang's unofficial [Golang Standard Project Layout](https://github.com/golang-standards/project-layout).
Front-End project structure is inspired by [CRUV](https://frontarm.com/james-k-nelson/react-cruv/) and [Redux Ducks](https://github.com/erikras/ducks-modular-redux) project layouts.

## Kafka

To run Kafka cluster for development I am using Landoop container
[landoop/fast-data-dev](https://hub.docker.com/r/landoop/fast-data-dev)

```sh
docker run --rm -p 2181:2181 -p 3030:3030 -p 8081-8083:8081-8083 -p 9581-9585:9581-9585 -p 9092:9092 -e ADV_HOST=192.168.67.2 landoop/fast-data-dev:latest
```
