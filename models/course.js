const mongoose = require("mongoose");
const Joi = require("joi");

const courseScheme = new mongoose.Schema({
  judul: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  kategori: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
});

const Course = mongoose.model("Course", courseScheme);

const validateCourse = (course) => {
  const scheme = Joi.object({
    judul: Joi.string().min(3).max(255).required(),
    kategori: Joi.string().required(),
    deskripsi: Joi.string().required(),
    image: Joi.string().required(),
    harga: Joi.number().required(),
  });

  return scheme.validate(course);
};

exports.Course = Course;
exports.validate = validateCourse;
