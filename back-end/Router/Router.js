const express = require('express');
const router = express.Router();
const controller = require("../Controller/Controller")

router.route("/calculate").get(controller.calc);
router.route("/getCurrentData").get(controller.weatherData)
router.route("/getForecast").get(controller.getForecast)

module.exports = router;