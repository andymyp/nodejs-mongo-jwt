const jwt = require("jsonwebtoken");
const config = require("config");

const { User } = require("../models/user");

const authToken = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).send({
      code: "error",
      message: "Access Denied!: No token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send({
      code: "error",
      message: "Invalid token",
    });
  }
};

const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.user._id).exec();

  if (user.role === "admin") {
    next();
  } else {
    res.status(403).send({
      code: "error",
      message: "Require admin role!",
    });
  }
};

module.exports = {
  authToken,
  isAdmin,
};
