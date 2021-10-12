const { User } = require("../models/user");
const { Course } = require("../models/course");

const getSimpleStatistics = async (req, res, next) => {
  const totalUser = await User.find().count();
  const totalCourse = await Course.find().count();
  const totalFreeCourse = await Course.find({ harga: 0 }).count();

  res.status(200).send({
    code: "success",
    message: "Simple statistics",
    data: {
      totalUser: totalUser,
      totalCourse: totalCourse,
      totalFreeCourse: totalFreeCourse,
    },
  });
};

module.exports = {
  getSimpleStatistics,
};
