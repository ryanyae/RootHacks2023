const express = require('express');
const router = express.Router();
const controller = require("../Controller/Controller")

router.route("/calculate").get(controller.calc);


module.exports = router;