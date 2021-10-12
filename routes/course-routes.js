const express = require("express");

const { authToken, isAdmin } = require("../middleware/auth");
const mt = require("../middleware/multer");

const {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
  getCategoryCourse,
  getPopularCategoryCourse,
  searchCourse,
  getSortCourses,
} = require("../controllers/courseController");

const router = express.Router();

router.post("/course", [authToken, isAdmin, mt.single("image")], createCourse);
router.put(
  "/course/:id",
  [authToken, isAdmin, mt.single("image")],
  updateCourse
);
router.delete("/course/:id", [authToken, isAdmin], deleteCourse);

router.get("/courses", authToken, getCourses);
router.get("/course/:id", authToken, getCourse);

router.get("/category-course", authToken, getCategoryCourse);
router.get("/popular-category-course", authToken, getPopularCategoryCourse);
router.get("/search-course", authToken, searchCourse);
router.get("/sort-course", authToken, getSortCourses);

module.exports = {
  routes: router,
};
