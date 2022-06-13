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
## /create-todo
Input:
```
title: string
description: string
finish: bool

```
Output: New task created (json)

## /get-todo
Input: None

Output: json
## /update-todo/:id
Input:
```
id: any
title: string
description: string
finish: bool
```
Output: task update (json)

## /delete-todo/:id
Input:
```
id: any
title: string
description: string
finish: bool
```
Output: task deleted (json)

# DATA
Table Todo:
```
task: String
description: String
finish: Boolean
```
