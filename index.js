const http = require("http"); // BUILT-IN HTTP MODULE (1)
const express = require("express");
const app = express();
// const app = require("./app");
const port = process.env.PORT || 3000;

const server = http.createServer(app); //CREATE A SERVER (2)

const productEndpoints = require("./api/routes/products");

app.use("/products", productEndpoints);

// THIS WILL SHOW UP ON LOCALHOST:3000 (_DEFAULT_)
app.use((req, res) => {
  res.status(200).json({
    message: "this is a test!"
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// var http = require('http');

// var server = http.createServer(function(req, res) {
// res.writeHead(200);
// res.end('Hi everybody!');
// });
// server.listen(8080);
