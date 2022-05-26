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
