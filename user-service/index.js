const express = require("express");

const app = express();

const PORT = 3001;
require("dotenv").config()

app.get("/users", (req, res) => {
  res.json({
    service: "USER-SERVICE",
    instance: process.env.INSTANCE_NAME || "local-user-instance",
    users: [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`User Service running on ${PORT}`);
});