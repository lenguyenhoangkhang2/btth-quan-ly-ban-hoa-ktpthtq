const multer = require("multer");
const { diskStorage } = require("multer");

module.exports.uploadImage = multer({
  storage: diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      const dateStr = new Date().toISOString().replace(/:/g, "-");
      cb(null, dateStr + "-" + file.originalname);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});
