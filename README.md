# Oswee

This is a **personal** distributed microservices pet-project.

## Current state

12-Aug-2019
Currently managed to Dockerize `./domains/public/` (multi-stage scratch build) which is public frontend.
I think i will split front-end in two parts.

1) For public guest users and
2) For authenticated users.

I am thinking on splitting front-end in self-contined components (Composite UI?)
where each component could be deployed independently by its team, but ...
it leads to some questions i should research. Like, how to manage composition of those components.
How to handle Redux part in such case because every component would have its own independent redux store,
but if every action exchange would happend via HTTP/2 / WebSockets and supporting backend services,
this would lead to somehow slow UI.
A lot to think/learn of.

As well today i made Storybook implementation. It seems to work. Next steps would be to split that into separate
Go webserver.

Some of next tasks/milestones would be to implement User domain services to Sign Up, Sign In, Restore Password.

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

Back-End project structure are based on Golang's unofficial [Golang Standard Project Layout](https://github.com/golang-standards/project-layout).
Front-End project structure are based on [CRUV](https://frontarm.com/james-k-nelson/react-cruv/) and [Redux Ducks](https://github.com/erikras/ducks-modular-redux) project layouts.
