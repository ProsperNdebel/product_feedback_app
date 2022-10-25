require("dotenv").config;

const express = require("express");
const cors = require("cors");
const path = require("path");

//the data of comments from the array
const data = require("./product-feedback-app/src/data.json");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  return res.status(200).send(data);
});

const PORT = process.env.PORT || 5050;
console.log(PORT);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
