const express = require("express");
const { body } = require("express-validator");
const authController = require("../controllers/auth");
const User = require("../model/user");

const router = express.Router();

router.post("/login", authController.postLogin);

router.get("/signup", authController.getSignup);

router.post("/logout", authController.postLogout);

router.post(
  "/signup",
  body("tendn")
    .not()
    .isEmpty()
    .withMessage("Tên đăng nhập đang bỏ trống")
    .custom((value) => {
      return User.findOne({ username: value }).then((user) => {
        if (user) {
          return Promise.reject(
            "Tên đăng nhập đã được sử dụng, vui lòng chọn tên đăng nhập khác"
          );
        }
      });
    }),
  body("matkhau").not().isEmpty().withMessage("Mật khẩu đang bỏ trống"),
  body("matkhauxacnhan").not().isEmpty().withMessage("Mật khẩu xác nhận đang bỏ trống"),
  body("hoten").not().isEmpty().withMessage("Họ tên đang bỏ trống"),
  body("email")
    .not()
    .isEmpty()
    .withMessage("Email đang bỏ trống")
    .isEmail()
    .withMessage("Email không hợp lệ")
    .custom((value) => {
      return User.findOne({ email: value }).then((user) => {
        if (user) {
          return Promise.reject("E-mail đã đăng ký, vui lòng chọn email khác");
        }
      });
    }),
  body("diachi").not().isEmpty().withMessage("Địa chỉ đang bỏ trống"),
  body("sodt").not().isEmpty().withMessage("Số điện thoại đang bỏ trống"),
  authController.postSignup
);

module.exports = router;
