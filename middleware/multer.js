const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "CourseImages",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [
      {
        width: 300,
        height: 300,
        crop: "limit",
      },
    ],
  },
});

module.exports = multer({ storage: storage });
