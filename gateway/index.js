const express = require("express");
const axios = require("axios");
const services = require("./config")
require("dotenv").config();

const app = express();

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
    const response = await axios.get(services.PRODUCT_SERVICE + "/products");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({
      message: "Product service unavailable"
    });
  }

});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Gateway running on ${PORT}`);
});