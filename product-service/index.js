const express = require("express");

const app = express();

const PORT = 3002;

app.get("/products", (req, res) => {
  res.json({
    service: "PRODUCT-SERVICE",
    instance: process.env.INSTANCE_NAME || "local-product-instance",
    products: [
      {
        id: 1,
        name: "Laptop"
      },
      {
        id: 2,
        name: "Phone"
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Product Service running on ${PORT}`);
});