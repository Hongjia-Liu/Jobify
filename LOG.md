# Server-side Development Log

## Basic Server Setup

- navigate to the root folder `Jobify` and run `npm init -y`

- install Prettier `npm install -D prettier` and create config file `echo {}> .prettierrc.json`

- update `.prettierrc.json`

  ```json
  {
    "tabWidth": 2
  }
  ```

- update `package.json` to specify the server-side `.js` files are ES modules

  ```json
  "type": "module",
  ```

- install Nodemon `npm install -D nodemon` and update `package.json`

  ```json
  "scripts": {
    "start": "nodemon server"
  },
  ```

- install Express `npm install express`

- create `server.js` in `Jobify`

```js
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
```

## Not Found Middleware

- create `middleware` directory in the root directory
- create `not-found.js` in `Jobify/middleware/`

```js
const notFoundMiddleware = (req, res) => {
  res.status(404).send("Route does not exist");
};

export default notFoundMiddleware;
```

- update `server.js`

```js
// middleware
import notFoundMiddleware from "./middleware/not-found.js";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFoundMiddleware);
```

## Error Middleware

- create `error-handler.js` in `Jobify/middleware/`

```js
const errorHandlerMiddleware = (err, req, res, next) => {
  res.status(500).json({ msg: "There was an error" });
};

export default errorHandlerMiddleware;
```

- update `server.js`

```js
// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
```

## `.env`

- install dotenv `npm install dotenv`
- inside `server.js`, add
  ```js
  import dotenv from "dotenv";
  dotenv.config();
  ```
- create `.env`, add `PORT=4000`, add `.env` to `.gitignore`
- create `.env.example`
