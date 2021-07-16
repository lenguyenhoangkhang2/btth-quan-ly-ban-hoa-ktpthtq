const express = require("express");
const shopController = require("../controllers/shop");
const authMiddleware = require("../middleware/auth");
const { body } = require("express-validator");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/search", shopController.getSearch);

router.post("/search", shopController.postSearch);

router.get("/category/:text", shopController.getFlowerByCategory);

router.get("/detail/:id", shopController.getFlower);

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.postCart);

router.post("/update-quantity-cart-item/:id", shopController.updateQuantityCartItem);

router.post("/delete-cart-item/:id", shopController.deleteCartItem);

router.post("/order", authMiddleware.isAuth, shopController.userPostOrder);

router.get("/orders", authMiddleware.isAuth, shopController.getOrders);

router.get("/guest-order", authMiddleware.isGuest, shopController.guestGetOrder);

router.post(
  "/guest-order",
  body("name").not().isEmpty().withMessage("Tên khách hàng đang bỏ trống"),
  body("email")
    .not()
    .isEmpty()
    .withMessage("Email đang bỏ trống")
    .isEmail()
    .withMessage("Email không hợp lệ"),
  body("phone").not().isEmpty().withMessage("Số điện thoại đang bỏ trống"),
  body("address").not().isEmpty().withMessage("Địa chỉ đang bỏ trống"),
  authMiddleware.isGuest,
  shopController.guestPostOrder
);

module.exports = router;
