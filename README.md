# API-reactjs-nodejs
Simple CRUD API in react and nodejs, with express and axios

Database: mongodb

## install dependencies
In frontend/ and backend/ :
```
npm install
```
# USAGE
start backend:
```
cd backend/
npm start
```

start frontend:
```
cd frontend/
npm start
```

# API
routes:
```
/create-todo : add new todo to the DB
/get-todo : get all todo from the DB
/update-todo/:id : update the todo with the given id
/delete-todo/:id : delete the todo with the given id
```

# DATA
Table Todo:
```
task: String
description: String
finish: Boolean
```
