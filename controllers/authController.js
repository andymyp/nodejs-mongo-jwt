const Joi = require("joi");
const bcrypt = require("bcrypt");

const { User } = require("../models/user");

const login = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(422).send({
      code: "error",
      message: error.details[0].message,
    });
  }

  const user = await User.findOne({
    email: req.body.email,
    isDeleted: false,
  }).exec();

  if (!user) {
    return res.status(404).send({
      code: "error",
      message: "Email tidak terdaftar",
    });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(404).send({ code: "error", message: "Password salah" });
  }

  const token = user.generateAuthToken();
  res.status(200).send({
    code: "success",
    message: "Login berhasil",
    role: user.role,
    token: token,
  });
};

const validate = (req) => {
  const scheme = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  return scheme.validate(req);
};

module.exports = { login };
