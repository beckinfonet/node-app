const http = require("http");
const express = require("express");
const app = express();
// const app = require("./app");
const port = process.env.PORT || 3000;

const server = http.createServer(app);

const productEndpoints = require("./api/routes/products");

app.use("/products", productEndpoints);
app.use((req, res) => {
  res.status(200).json({
    message: "this is a test!"
  });
});
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
