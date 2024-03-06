const express = require("express");
const routes = express.Router();
const path = require("path");

const productsRouter = require("./products.routes");
const userRouter = require("./users.routes");

routes.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/home.html"));
});
routes.use("/products", productsRouter);
routes.use("/users", userRouter);

module.exports = routes;
