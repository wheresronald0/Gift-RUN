const express = require("express");
const router = express.Router();
const axios = require("axios");
const indexController = require("../controllers/index.js");

router.get("/all-runs", indexController.index);

module.exports = router;
