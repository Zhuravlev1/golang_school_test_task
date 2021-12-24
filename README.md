## Installation

```bash
$ npm install
```

### Configure local environment
```$bash
$ cp .env.example .env 
```

## Running the app
1. Run the docker container with Postgres Db
```
$ docker-compose up -d
```
2. Run the server
```bash
$ npm run start:node-dev
```
3. Documentation http://localhost:3000/api/docs

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Generate a migration
```bash
npm run typeorm migration:generate -- -n <MigrationName>
```

### Run a migrations
```bash
$ npm run typeorm migration:run
```

## ❯ Further Documentations
| Name & Link                       | Description                       |
| --------------------------------- | --------------------------------- |
| [Nest](https://nestjs.com/) | A progressive Node.js framework for building efficient, reliable and scalable server-side applications. |
| [TypeORM](http://typeorm.io/#/) | TypeORM is highly influenced by other ORMs, such as Hibernate, Doctrine and Entity Framework. |
| [Jest](http://facebook.github.io/jest/) | Delightful JavaScript Testing Library for unit and e2e tests |
| [swagger Documentation](http://swagger.io/) | API Tool to describe and document your api. |

## Reasons for use ESLint instead of TSLint
In the [TypeScript 2019 Roadmap](https://bit.ly/2SUmIOe), the TypeScript core team explains that ESLint has a more performant architecture than TSLint and that they will only be focusing on ESLint when providing editor linting integration for TypeScript.
