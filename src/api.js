const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Server is up and running",
    statusCode: 200,
  });
});

app.use(`/.netlify/functions/api/brahma`, router);

module.exports = app;
module.exports.handler = serverless(app);
