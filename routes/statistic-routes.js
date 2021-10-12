const express = require("express");

const { authToken, isAdmin } = require("../middleware/auth");
const { getSimpleStatistics } = require("../controllers/statisticController");

const router = express.Router();

router.get("/simple-statistics", [authToken, isAdmin], getSimpleStatistics);

module.exports = {
  routes: router,
};
