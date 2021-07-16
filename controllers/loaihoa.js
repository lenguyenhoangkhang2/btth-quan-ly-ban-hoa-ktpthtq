// JavaScript Document
var csdl = require("./database");
module.exports.select = async function () {
  var dsloaihoa = await csdl.DocBang("SELECT * from loaihoa ");
  var kq = "";
  for (i = 0; i < dsloaihoa.length; i++) {
    kq =
      kq +
      "<a href='/maloai/" +
      dsloaihoa[i].Maloai +
      "'>" +
      dsloaihoa[i].Tenloai +
      "</a><br>";
  }

  return kq;
};
