const express = require("express");
const mongoose = require("mongoose");
const mongo = require("mongo");
const bodyParser = require("body-parser");
const axios = require("axios");

const indexRoute = require("./routes/index.js");

mongoose.connect("mongodb://localhost/Gift_RUN");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", indexRoute);

app.listen(4000, () => {
  console.log("Gift-RUN Server is gifting!!");
});
