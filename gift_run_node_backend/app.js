const express = require("express");
const mongoose = require("mongoose");
const mongo = require("mongo");

const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const indexRoute = require("./routes/index.js");

mongoose
  .connect("mongodb://localhost/Gift_RUN")
  .then(console.log("Mongo is connected!"));

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/run", indexRoute);

app.listen(4000, () => {
  console.log("Gift-RUN Server is gifting!!");
});
