const express = require("express");

const { authToken, isAdmin } = require("../middleware/auth");
const { createUser, deleteUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", createUser);
router.delete("/user/:id", [authToken, isAdmin], deleteUser);

module.exports = {
  routes: router,
};
