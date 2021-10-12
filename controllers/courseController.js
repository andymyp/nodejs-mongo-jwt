const { Course, validate } = require("../models/course");

const createCourse = async (req, res, next) => {
  const { error } = validate({ ...req.body, image: req.file.path });
  if (error) {
    return res.status(422).send({
      code: "error",
      message: error.details[0].message,
    });
  }

  let course = new Course({
    judul: req.body.judul,
    kategori: req.body.kategori,
    deskripsi: req.body.deskripsi,
    image: req.file.path,
    harga: req.body.harga,
  });

  course = await course.save();
  res.status(200).send({
    code: "success",
    message: "Course berhasil dibuat",
    data: course,
  });
};

const getCourses = async (req, res, next) => {
  const courses = await Course.find().sort({ judul: 1 }).exec();
  res.status(200).send({
    code: "success",
    message: "List course order by judul asc",
    data: courses,
  });
};

const getCourse = async (req, res, next) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    return res.status(401).send({
      code: "error",
      message: "Course tidak ditemukan",
    });
  }

  res.status(200).send({
    code: "success",
    message: "Get course by id",
    data: course,
  });
};

const updateCourse = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(422).send({
      code: "error",
      message: error.details[0].message,
    });
  }

  let course = await Course.findByIdAndUpdate(
    req.params.id,
    {
      judul: req.body.judul,
      kategori: req.body.kategori,
      deskripsi: req.body.deskripsi,
      harga: req.body.harga,
    },
    { new: true }
  );

  if (!course) {
    return res.status(401).send({
      code: "error",
      message: "Course tidak ditemukan",
    });
  }

  res.status(200).send({
    code: "success",
    message: "Course berhasil diupdate",
    data: course,
  });
};

const deleteCourse = async (req, res, next) => {
  const course = await Course.findByIdAndRemove(req.params.id);
  if (!course) {
    return res.status(401).send({
      code: "error",
      message: "Course tidak ditemukan",
    });
  }

  res.status(200).send({
    code: "success",
    message: "Course berhasil dihapus",
    data: course,
  });
};

const getCategoryCourse = async (req, res, next) => {
  const categoryCourse = await Course.aggregate([
    {
      $group: {
        _id: "$kategori",
      },
    },
  ])
    .sort({ kategori: 1 })
    .exec();

  res.status(200).send({
    code: "success",
    message: "List category course",
    data: categoryCourse,
  });
};

const getPopularCategoryCourse = async (req, res, next) => {
  const popularCategoryCourse = await Course.aggregate([
    {
      $group: {
        _id: "$kategori",
        total: { $sum: 1 },
      },
    },
  ])
    .sort({ total: -1 })
    .exec();

  res.status(200).send({
    code: "success",
    message: "List popular category course",
    data: popularCategoryCourse,
  });
};

const searchCourse = async (req, res, next) => {
  const course = await Course.find({
    judul: { $regex: ".*" + req.body.judul + ".*", $options: "i" },
  })
    .sort({ judul: 1 })
    .exec();

  res.status(200).send({
    code: "success",
    message: "Search course by judul",
    data: course,
  });
};

const getSortCourses = async (req, res, next) => {
  const harga =
    req.body.harga == "lowest" ? 1 : req.body.harga == "highest" ? -1 : 0;

  const courses = await Course.find().sort({ harga: harga }).exec();
  res.status(200).send({
    code: "success",
    message: "List course sort by harga " + req.body.harga,
    data: courses,
  });
};

module.exports = {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
  getCategoryCourse,
  getPopularCategoryCourse,
  searchCourse,
  getSortCourses,
};
