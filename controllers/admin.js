const { validationResult } = require("express-validator");
const Flower = require("../model/flower");
const Order = require("../model/order");

exports.getAddFlower = (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0].msg;
  } else {
    message = null;
  }

  res.render("add-flower", {
    message: message,
  });
};

exports.postAddFlower = async (req, res, next) => {
  const name = req.body.ten_hoa;
  const category = req.body.loai;
  const description = req.body.mo_ta;
  const price = req.body.gia_ban;
  const image = req.file;

  const errors = [...validationResult(req).array()];

  if (!image) {
    errors.push({
      param: "image",
      msg: "Chưa chọn ảnh cho hoa hoặc ảnh sai định dạng",
    });
  }

  if (errors.length > 0) {
    req.flash("error", errors);
    return res.redirect("/admin/add-flower");
  }

  const flower = new Flower({
    name: name,
    category: category,
    price: price,
    imageUrl: image.path,
    description: description,
  });

  try {
    await flower.save();
    res.redirect("/");
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().populate("flowers.flowerId");

    res.render("don-hang-da-dat", {
      orders: orders,
    });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

exports.deliverOrder = async (req, res, next) => {
  const orderId = req.params.id;
  try {
    const order = await Order.findById(orderId);
    order.delivered = true;
    await order.save();

    res.redirect("/admin/orders");
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};
