const { validationResult } = require("express-validator");
const Flower = require("../model/flower");
const Order = require("../model/order");

exports.getIndex = async (req, res, next) => {
  try {
    const flowers = await Flower.find();
    res.render("home", {
      flowers: flowers,
    });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

exports.getFlower = async (req, res, next) => {
  const id = req.params.id;
  try {
    const flower = await Flower.findById(id);
    res.render("trang_chi_tiet_hoa", {
      flower: flower,
    });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

exports.getSearch = async (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0].msg;
  } else {
    message = null;
  }

  res.render("trang_tim_kiem", {
    message: message,
    flowers: null,
  });
};

exports.postSearch = async (req, res, next) => {
  const searchName = new RegExp(`.*${req.body.name}.*`, "i");

  try {
    const flowers = await Flower.find({ name: searchName });

    res.render("trang_tim_kiem", {
      message: null,
      flowers: flowers,
    });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

exports.getFlowerByCategory = async (req, res, next) => {
  const category = req.params.text;

  try {
    const flowers = await Flower.find({ category: category });

    res.render("home", {
      flowers: flowers,
    });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

exports.getCart = (req, res, next) => {
  res.render("gio_hang", {
    cart: req.session.cart,
  });
};

exports.postCart = async (req, res, next) => {
  const id = req.body.flowerId;
  const cart = [...req.session.cart];
  const index = cart.findIndex((i) => i._id === id);

  if (index >= 0) {
    cart[index].quantity++;
    req.session.cart = cart;

    await req.session.save();

    return res.redirect("/cart");
  }

  try {
    const flower = await Flower.findById(id);
    cart.push({
      _id: flower._id,
      name: flower.name,
      quantity: 1,
      price: flower.price,
      imageUrl: flower.imageUrl,
    });

    req.session.cart = cart;

    await req.session.save();

    res.redirect("/cart");
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

exports.updateQuantityCartItem = async (req, res, next) => {
  const id = req.params.id;
  const quantity = req.body.quantity;

  const cart = [...req.session.cart];

  const index = cart.findIndex((i) => i._id === id);
  if (index === -1) {
    return res.redirect("/cart");
  }

  cart[index].quantity = quantity;

  req.session.cart = cart;

  try {
    await req.session.save();
    res.redirect("/cart");
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

exports.deleteCartItem = async (req, res, next) => {
  const id = req.params.id;

  const cart = [...req.session.cart];

  req.session.cart = cart.filter((i) => i._id !== id);

  try {
    await req.session.save();
    res.redirect("/cart");
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ "user.userId": req.user._id }).populate(
      "flowers.flowerId"
    );

    res.render("don-hang-da-dat", {
      orders: orders,
    });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

exports.userPostOrder = async (req, res, next) => {
  const user = req.user;
  const cart = [...req.session.cart];

  const flowers = cart.map((i) => {
    return { flowerId: i._id, quantity: i.quantity, price: i.price };
  });

  const order = new Order({
    flowers: flowers,
    user: {
      userId: user._id,
      email: user.email,
      name: user.name,
      address: user.address,
      phone: user.phone,
    },
    delivered: false,
  });

  try {
    await order.save();

    req.session.cart = [];
    await req.session.save();

    res.redirect("/orders");
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

exports.guestGetOrder = (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0].msg;
  } else {
    message = null;
  }

  const cart = req.session.cart;

  if (cart.length === 0) {
    res.redirect("/");
  }

  res.render("trang_dat_hang", {
    errorMessage: message,
    cart: cart,
    success: false,
  });
};

exports.guestPostOrder = async (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  const address = req.body.address;
  const phone = req.body.phone;

  const errors = [...validationResult(req).array()];
  if (errors.length > 0) {
    req.flash("error", errors);
    return res.redirect("/guest-order");
  }

  const cart = [...req.session.cart];

  const flowers = cart.map((i) => {
    return { flowerId: i._id, quantity: i.quantity, price: i.price };
  });

  const order = new Order({
    flowers: flowers,
    user: {
      email: email,
      name: name,
      address: address,
      phone: phone,
    },
    delivered: false,
  });

  try {
    await order.save();

    req.session.cart = [];
    await req.session.save();

    res.render("trang_dat_hang", {
      errorMessage: null,
      cart: cart,
      success: true,
    });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};
