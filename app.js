const express = require("express");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

module.exports = app;
