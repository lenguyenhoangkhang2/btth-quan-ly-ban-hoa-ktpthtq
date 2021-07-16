const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");
const User = require("./model/user");

const app = express();

dotenv.config({ path: "./config/config.env" });
const MONGODB_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const publicDir = require("path").join(__dirname, "/public");
app.use("/images", express.static(path.join(__dirname, "images")));

app.set("view engine", "ejs");
app.use(express.static(publicDir));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "1234567abc",
    cookie: { maxAge: 120 * 60000 },
  })
);

app.use(flash());

app.use(async (req, res, next) => {
  res.locals.username = "";
  res.locals.isLoggedIn = false;
  res.locals.isAdmin = false;

  if (!req.session.cart) {
    req.session.cart = [];
    await req.session.save();
  }

  if (!req.session.userId) {
    return next();
  }
  try {
    const user = await User.findById(req.session.userId);
    if (!user) {
      return next();
    }

    req.user = user;
    res.locals.isLoggedIn = true;
    res.locals.isAdmin = req.user.roles.includes("admin");
    res.locals.username = req.user.username;

    next();
  } catch (err) {
    next(new Error(err));
  }
});

const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");

const authMiddleware = require("./middleware/auth");

app.use(shopRoutes);
app.use(authRoutes);
app.use("/admin", authMiddleware.isAdmin, adminRoutes);

// const loaihoa = require("./controllers/loaihoa");
// const hoa = require("./controllers/hoa");
// const khachhang = require("./controllers/khachhang");

// async function HienThi(req, res, maloai) {
//   var dslhoa = await loaihoa.select();
//   var chitiethoa = await hoa.select(maloai);
//   var tenkh = "";
//   if (req.session.kh != "" && req.session.kh != undefined)
//     tenkh = "Chào " + req.session.kh.HoTen;
//   res.render("trang_1", { dslh: dslhoa, dshoa: chitiethoa, tendn: tenkh });
// }

// async function HienThiChiTiet(res, mahoa) {
//   var ttchitiethoa = await hoa.selectChitiet(mahoa);
//   res.render("trang_chi_tiet_hoa", { chitiethoa: ttchitiethoa });
// }
// async function HienThiTimKiem(res, ten) {
//   var tttkiem = await hoa.selectFind(ten);
//   res.render("trang_tim_kiem", { kqtk: tttkiem });
// }
// async function dangnhap(req, res, tendn, matkhau) {
//   var kh = await khachhang.dangnhap(tendn, matkhau);
//   req.session.kh = kh;
//   HienThi(req, res, 1);
// }

// app.get("/", function (req, res) {
//   HienThi(req, res, "1");
// });

// app.get("/maloai/:maloai", function (req, res) {
//   var maloai = req.params.maloai;
//   if (isNaN(maloai) == false) HienThi(req, res, maloai);
// });

// app.get("/detail/:mahoa", function (req, res) {
//   var mahoa = req.params.mahoa;
//   if (isNaN(mahoa) == false) HienThiChiTiet(res, mahoa);
// });

// app.get("/timkiem", function (req, res) {
//   res.render("trang_tim_kiem", { kqtk: "" });
// });

// app.post("/timkiem", function (req, res) {
//   var thongtin = req.body;
//   ten = thongtin.ten;
//   HienThiTimKiem(res, ten);
// });

// app.post("/dangnhap", function (req, res) {
//   var thongtin = req.body;
//   tendn = thongtin.ten_dn;
//   matkhau = thongtin.mat_khau;
//   dangnhap(req, res, tendn, matkhau);
// });

// app.get("/dangky", function (req, res) {
//   res.render("trang_dang_ky");
// });

// app.post("/dangky", async function (req, res) {
//   try {
//     const message = await khachhang.dangky(
//       req.body.ten_dn,
//       req.body.mat_khau,
//       req.body.mat_khau1,
//       req.body.ho_ten,
//       req.body.email,
//       req.body.dia_chi,
//       req.body.so_dt
//     );

//     res.render("trang_dang_ky", { message: message });
//   } catch (error) {
//     console.log(error);
//     res.render("trang_dang_ky", { message: error.message });
//   }
// });

app.use((error, req, res, next) => {
  if (error.httpStatusCode) {
    res.status(error.httpStatusCode).render("error", {
      errorMessage: error.message || "Xảy ra lỗi",
      httpStatusCode: error.httpStatusCode || false,
    });
  } else {
    res.status(500).render("error", {
      errorMessage: error.message,
      httpStatusCode: 500,
    });
  }
});

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((e) => {
    console.log("Database is connected");
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
