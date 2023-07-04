const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(`${__dirname}/public/uploads/`));
    // mandando la imagen a S3
  },
  filename: function (req, file, cb) {
    console.log("🚀 ~ file: upload-img.js:12 ~ file", file);
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploader = multer({
  storage,
  onError: function (err, next) {
    console.log("🚀 ~ file: upload-img.js:17 ~ err", err);
    next();
  },
});

module.exports = {
  uploader,
};
