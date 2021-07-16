const isAuth = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/");
  }

  next();
};

const isGuest = (req, res, next) => {
  if (req.session.isLoggedIn) {
    return res.redirect("/");
  }

  next();
};

const isAdmin = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/");
  }

  if (!req.user.roles.includes("admin")) {
    const err = new Error("Yêu cầu quyền ADMIN");
    err.httpStatusCode = 403;
    next(err);
  }

  next();
};

module.exports = {
  isAuth: isAuth,
  isAdmin: isAdmin,
  isGuest: isGuest,
};
