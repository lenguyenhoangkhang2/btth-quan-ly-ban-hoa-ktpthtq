// JavaScript Document
var csdl = require("./database");
module.exports.dangnhap = async function (tendn, matkhau) {
  var chuoi =
    "SELECT * from khachhang where TenDN='" + tendn + "' and MatKhau='" + matkhau + "'";
  var dskh = await csdl.DocBang(chuoi);
  if (dskh.length > 0) return dskh[0];
  return "";
};

module.exports.dangky = async function (
  tendn,
  matkhau,
  matkhauxacnhan,
  hoten,
  email,
  diachi,
  sodt
) {
  if (
    tendn === "" ||
    matkhau === "" ||
    matkhauxacnhan === "" ||
    hoten === "" ||
    email === "" ||
    diachi === "" ||
    sodt === ""
  ) {
    throw new Error("Các trường thông tin không để trống");
  }

  const existEmail = `SELECT * from khachhang where Email='${email}'`;
  const existTenDn = `SELECT * from khachhang where TenDN='${tendn}'`;

  const existsTenDN = await csdl.DocBang(existTenDn);
  const existsEmail = await csdl.DocBang(existEmail);

  if (existsEmail.length > 0) {
    throw new Error("Email đã được sử dụng!");
  }
  if (existsTenDN.length > 0) {
    throw new Error("Tên đăng nhập đã được sử dụng!");
  }

  if (matkhau !== matkhauxacnhan) {
    throw new Error("Mật khẩu xác nhận không chính xác");
  }

  try {
    await csdl.DocBang(
      `insert into khachhang(TenDN,MatKhau,HoTen,DiaChi,DienThoai,Email,quyen) values('${tendn}','${matkhau}','${hoten}','${diachi}','${sodt}','${email}',0)`
    );
    return "Đăng ký thành công";
  } catch (error) {
    throw new Error(error.sqlMessage);
  }
};
