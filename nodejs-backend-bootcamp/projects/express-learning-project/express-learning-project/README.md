# Express Learning Project

A small but complete Express.js API that demonstrates every core concept:
Server, Routes, Middleware, Router, Controllers, MVC, Request/Response,
Status Codes, Error Handling, Validation, Morgan, Helmet, CORS, Dotenv, Nodemon.

## Setup

```bash
npm install
npm run dev     # starts with nodemon (auto-restart on save)
# or
npm start       # starts with plain node
```

Server runs at http://localhost:5000

## Try it out

| Method | URL                     | Body (JSON)                                  |
|--------|-------------------------|-----------------------------------------------|
| GET    | /api/users              | -                                               |
| GET    | /api/users/1             | -                                               |
| POST   | /api/users               | { "name": "Rohan", "email": "r@x.com", "age": 22 } |
| PUT    | /api/users/1              | { "name": "Rohan Updated", "email": "r@x.com" }   |
| DELETE | /api/users/1              | -                                               |

Try GET /api/users/999 to see the 404 error handler in action.
Try POST /api/users with an invalid email to see the validation middleware in action.
