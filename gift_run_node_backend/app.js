const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongo = require("mongo");

const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const indexRoute = require("./routes/index.js");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(
    "mongodb://gift_run_admin:dbadmin1@ds155073.mlab.com:55073/gift-run"
  );
} else {
  mongoose.connect("mongodb://localhost/Gift_RUN");
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/run", indexRoute);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
