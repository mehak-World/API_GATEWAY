require("dotenv").config()

const SERVICES = {
  USER_SERVICE:
    process.env.USER_SERVICE_URL,

  PRODUCT_SERVICE:
    process.env.PRODUCT_SERVICE_URL
};

module.exports = SERVICES;