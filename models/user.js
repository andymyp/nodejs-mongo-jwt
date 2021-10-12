const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");
const Joi = require("joi");

const userScheme = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "admin"],
    default: "user",
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

userScheme.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, config.get("jwtPrivateKey"));
  return token;
};

const User = mongoose.model("User", userScheme);

const validateUser = (user) => {
  const scheme = Joi.object({
    nama: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(6).max(1024).required(),
    role: Joi.string().valid("user", "admin").default("user"),
    isDeleted: Joi.boolean().default(false),
    deletedAt: Joi.date().default(null),
  });

  return scheme.validate(user);
};

exports.User = User;
exports.validate = validateUser;
