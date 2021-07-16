const User = require("../model/user");
const { validationResult } = require("express-validator");

exports.postLogin = async (req, res, next) => {
  const username = req.body.tendn;
  const password = req.body.matkhau;

  try {
    const user = await User.findOne({ username: username, password: password });
    if (user) {
      req.session.isLoggedIn = true;
      req.session.userId = user._id;

      await req.session.save();
    }
    res.redirect("/");
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

exports.getSignup = (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0].msg;
  } else {
    message = null;
  }

  res.render("trang_dang_ky", {
    message: message,
  });
};

exports.postSignup = async (req, res, next) => {
  const tendn = req.body.tendn;
  const matkhau = req.body.matkhau;
  const matkhauxacnhan = req.body.matkhauxacnhan;
  const hoten = req.body.hoten;
  const email = req.body.email;
  const diachi = req.body.diachi;
  const sodt = req.body.sodt;

  const errors = [...validationResult(req).array()];

  if (matkhau !== matkhauxacnhan) {
    errors.push({ msg: "Mật khẩu xác nhận không chính xác" });
  }

  if (errors.length > 0) {
    req.flash("error", errors);
    return res.redirect("/signup");
  }

  try {
    const user = new User({
      username: tendn,
      password: matkhau,
      name: hoten,
      address: diachi,
      phone: sodt,
      email: email,
      roles: ["user"],
    });

    await user.save();
    res.redirect("/");
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
};
