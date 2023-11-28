## Introduction
This is a simple trivia crud api.


## Installation
```bash

$ npm install

```

## Running the app

```bash

#development
$ npm run start

#watch mode
$npm run start: dev

```
## Run the prisma version command to see the version installed

```bash
$ npx prisma version

```
you can also run npx prisma --help to see all the commands

## spin up your docker with the below command and connect with database

```bash
 $ docker compose run dev-db 

```
## to use the prisma studio use:
Prisma studio lets you visualizes your database

```bash

$ npx prisma studio

```

## Endpoints
In this code, there are 5 endpoints
The firdt one is create endpoint: It can be used to create post data into the database

localhost:3000/trivia/create 

the above endpoint returns ok with the data logged in the console.


Another endpoint is get question endpoint
localhost:3000/trivia/question

it takes a body of the question:"your question" and returns the data attributted with that input.

Another endpoint is get all fields endpoint

localhost:3000/trivia/FindFields

this return all the fields in the database

Another end point is get data by id endpoint:
It is used to fetch data in the database using its id

localhost:3000/trivia/"id"


it return data belonging to the id searched

