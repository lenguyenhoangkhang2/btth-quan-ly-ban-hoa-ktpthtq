const express = require("express");
const { body } = require("express-validator");
const adminController = require("../controllers/admin");
const { uploadImage } = require("../middleware/upload");

const router = express.Router();

router.get("/add-flower", adminController.getAddFlower);

router.post(
  "/add-flower",
  uploadImage.single("image"),
  body("ten_hoa").not().isEmpty().withMessage("Tên hoa đang bỏ trống"),
  body("loai").not().isEmpty().withMessage("Loại hoa đang bỏ trống"),
  body("mo_ta").not().isEmpty().withMessage("Mô tả đang bỏ trống"),
  body("gia_ban").not().isEmpty().withMessage("Giá bán đang bỏ trống"),
  adminController.postAddFlower
);

router.get("/orders", adminController.getOrders);

router.post("/orders/deliver/:id", adminController.deliverOrder);

module.exports = router;
