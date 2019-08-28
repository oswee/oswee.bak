# These are my personal notes and bookmarks.

Things I am looking for in project organization and architecture:

- Monorepo
- Microservices
- CQRS
- Hex/Clean/P&A/Onion well organized code
- Idiomatic directory naming
- gRPC/Protobufs
- Go Modules + Independent module versioning
- CI/CD
- Docker

`/cmd` directory should contain just entry points for every service (`main.go`) which imports and run a server package.

## Sef-hosted Git
[Gitea](https://gitea.io/en-us/)

[Gogs](https://gogs.io/)

## Microservices

[Create Versatile Microservices in Golang — Part 1](https://dzone.com/articles/create-versatile-microservices-in-golang-part-1)

## CQRS

[Code Project - Introduction to CQRS](https://www.codeproject.com/Articles/555855/Introduction-to-CQRS)
[Code Better - CQRS, Task Based UIs, Event Sourcing agh! - 2010, Java (Greg Young)](http://codebetter.com/gregyoung/2010/02/16/cqrs-task-based-uis-event-sourcing-agh/)
[looplab/eventhorizon](https://github.com/looplab/eventhorizon)

## Arhitecture

`AAA++` [DDD, Hexagonal, Onion, Clean, CQRS, … How I put it all together](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/)

## Hexagonal Architecture

[Hexagonal Architecture: three principles and an implementation example](https://blog.octo.com/en/hexagonal-architecture-three-principles-and-an-implementation-example/)

[Hexagonal Architecture: What Is It and How Does It Work?](https://blog.ndepend.com/hexagonal-architecture/)

[The Micro-Hexagon Design Pattern to Architecture Pattern, Part 1](https://dzone.com/articles/micro-hexagon)

## Clean Architecture

### Reads

[(Go) Applying The Clean Architecture to Go applications](https://manuel.kiessling.net/2012/09/28/applying-the-clean-architecture-to-go-applications/)

[(Go) Trying Clean Architecture on Golang](https://hackernoon.com/golang-clean-archithecture-efd6d7c43047)

[(Go) Clean Architecture using Golang](https://medium.com/@eminetto/clean-architecture-using-golang-b63587aa5e3f)

[(Go) Clean Architecture in Go](https://medium.com/@hatajoe/clean-architecture-in-go-4030f11ec1b1)

### Repositories

`AA` [(Go) CaptainCodeman/clean-go](https://github.com/CaptainCodeman/clean-go/blob/master/providers/appengine/factory.go)

Strange directory naming. Fanboy of appengine and nosql. No protobufs. No CQRS.

`A-` [(Go) err0r500/go-realworld-clean](https://github.com/err0r500/go-realworld-clean)

Totally bad codebase organization. Not suitable for microservice deployments and multi-team workflow. No protobufs. Garbage.

## Port & Adapters Architecture

[Ports & Adapters Architecture](https://herbertograca.com/2017/09/14/ports-adapters-architecture/)

## Onion Architecture

## WebSockets

[Going Infinite, handling 1 millions websockets connections in Go / Eran Yanay](https://www.youtube.com/watch?time_continue=1&v=LI1YTFMi8W4)