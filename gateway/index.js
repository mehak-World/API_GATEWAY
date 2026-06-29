const express = require("express");
const axios = require("axios");
const services = require("./config")
require("dotenv").config();

const app = express();

app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    console.log({
      method: req.method,
      path: req.path,
      status: res.statusCode,
      duration: Date.now() - start
    });
  });

  next();
});

app.get("/users", async (req, res) => {
  try {
    const response = await axios.get(services.USER_SERVICE + "/users");

    res.json(response.data);

  } catch (err) {

    res.status(500).json({
      message: "User service unavailable"
    });

  }
});



app.get("/products", async (req, res) => {
  try {

    console.log("PRODUCT URL:", services.PRODUCT_SERVICE);

    const response = await axios.get(
      services.PRODUCT_SERVICE + "/products"
    );

    res.json(response.data);

  } catch (err) {

    console.error("FULL ERROR:");
    console.error(err);

    res.status(500).json({
      message: err.message
    });

  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Gateway running on ${PORT}`);
});