-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 16, 2021 at 01:05 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `banhoa`
--

-- --------------------------------------------------------

--
-- Table structure for table `ctdondh`
--

DROP TABLE IF EXISTS `ctdondh`;
CREATE TABLE IF NOT EXISTS `ctdondh` (
  `sodh` int(11) NOT NULL,
  `Mahoa` int(11) NOT NULL,
  `Soluong` int(11) NOT NULL,
  `Dongia` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Dumping data for table `ctdondh`
--

INSERT INTO `ctdondh` (`sodh`, `Mahoa`, `Soluong`, `Dongia`) VALUES
(1, 1, 3, 50000),
(1, 2, 1, 60000),
(1, 19, 1, 150000),
(1, 20, 1, 50000),
(9, 13, 1, 120000),
(9, 14, 1, 85000),
(11, 1, 1, 15000),
(11, 2, 1, 60000),
(11, 3, 1, 45000),
(12, 1, 1, 15000),
(12, 4, 1, 40000),
(12, 5, 1, 70000),
(21, 2, 3, 60000),
(21, 3, 1, 45000);

-- --------------------------------------------------------

--
-- Table structure for table `dondh`
--

DROP TABLE IF EXISTS `dondh`;
CREATE TABLE IF NOT EXISTS `dondh` (
  `Sodh` int(11) NOT NULL AUTO_INCREMENT,
  `Makh` int(11) NOT NULL,
  `Ngaydh` date NOT NULL,
  `Dia_chi` varchar(200) COLLATE utf16_unicode_ci NOT NULL,
  `dagiao` tinyint(1) NOT NULL,
  PRIMARY KEY (`Sodh`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Dumping data for table `dondh`
--

INSERT INTO `dondh` (`Sodh`, `Makh`, `Ngaydh`, `Dia_chi`, `dagiao`) VALUES
(1, 1, '2015-03-04', '', 1),
(2, 1, '2015-03-04', '', 1),
(9, 1, '2015-05-22', 'anc', 1),
(11, 16, '2015-09-15', '357hfhfh', 1),
(12, 16, '2015-09-15', 'nguyễn tas6t1 y', 0),
(21, 1, '2015-12-06', '300a ntt', 0);

-- --------------------------------------------------------

--
-- Table structure for table `hoa`
--

DROP TABLE IF EXISTS `hoa`;
CREATE TABLE IF NOT EXISTS `hoa` (
  `mahoa` int(11) NOT NULL AUTO_INCREMENT,
  `maloai` int(11) DEFAULT NULL,
  `tenhoa` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dongia` int(11) DEFAULT NULL,
  `hinh` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mota` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`mahoa`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `hoa`
--

INSERT INTO `hoa` (`mahoa`, `maloai`, `tenhoa`, `dongia`, `hinh`, `mota`) VALUES
(1, 1, 'Đón xuân', 15000, 'cuc_9.jpg', '<p>Hoa c&uacute;c c&aacute;c m&agrave;u: trắng, v&agrave;ng, cam<img alt=\"\" src=\"/ckfinder/userfiles/images/IMG_6017.JPG\" style=\"height:133px; width:200px\" /></p>\r\n'),
(2, 1, 'Hồn nhiên', 60000, 'cuc_2.jpg', '<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:100%\">\r\n	<tbody>\r\n		<tr>\r\n			<td>&nbsp;</td>\r\n			<td><span style=\"color:rgb(165, 42, 42)\">Hoa c&uacute;c v&agrave;ng, cam. l&aacute; măng</span></td>\r\n		</tr>\r\n		<tr>\r\n			<td><img alt=\"\" src=\"/ckfinder/userfiles/images/IMG_6017.JPG\" style=\"height:133px; width:200px\" /></td>\r\n			<td>&nbsp;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>&nbsp;</td>\r\n			<td>&nbsp;</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>&nbsp;</p>\r\n'),
(3, 1, 'Tím thuỷ chung', 45000, 'cuc_3.jpg', 'Hoa cúc tím'),
(4, 1, 'Nét duyên tím hoa cà', 40000, 'cuc_4.jpg', 'Hoa cúc màu tím nhạt'),
(5, 1, 'Cùng khoe sắc', 70000, 'cuc_5.jpg', 'Hoa cúc các màu: trắng, vàng, cam'),
(6, 1, 'Trắng thơ ngây', 65000, 'cuc_6.jpg', 'Hoa cúc trắng'),
(7, 2, 'Dây tơ hồng', 250000, 'cuoi_1.jpg', 'Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng'),
(8, 2, 'Cầu thuỷ tinh', 220000, 'cuoi_2.jpg', 'Hoa hồng và hoa thuỷ tiên trắng'),
(9, 2, 'Duyên thầm', 260000, 'cuoi_3.jpg', 'Hoa cúc trắng, baby, lá măng'),
(10, 2, 'Ðâm chồi nảy lộc', 180000, 'cuoi_4.jpg', 'Hoa hồng trắng và các loại lá măng'),
(11, 2, 'Hoà quyện', 270000, 'cuoi_5.jpg', 'Hoa hồng trắng, lá thuỷ tùng'),
(12, 2, 'Nồng nàn', 210000, 'cuoi_6.jpg', 'Hoa hồng đỏ, lá thuỷ tùng, lá măng'),
(13, 3, 'Together', 120000, 'hong_1.jpg', 'Hồng xác pháo, cúc tím'),
(14, 3, 'Long trip', 85000, 'hong_2.jpg', 'Hoa hồng đỏ, lá kim thuỷ tùng'),
(15, 3, 'Beautiful life', 100000, 'hong_3.jpg', 'Hoa hồng đỏ, lá măng, lá đệm'),
(16, 3, 'Morning Sun', 75000, 'hong_4.jpg', 'Hoa hồng vàng'),
(17, 3, 'Pretty Bloom', 65000, 'hong_5.jpg', 'Hoa hồng trắng và lá thông'),
(18, 3, 'Red Rose', 45000, 'hong_7.jpg', 'Hoa hồng đỏ và lá măng'),
(19, 4, 'Vấn vuơng', 150000, 'xuan_1.jpg', 'Hoa hồng đỏ, hồng đậm, cúc đỏ, các loại lá'),
(20, 4, 'Nắng nhẹ nhàng', 50000, 'xuan_2.jpg', 'Hoa cúc xanh, hoa lys vàng, lá đệm'),
(21, 4, 'Thanh tao', 120000, 'xuan_3.jpg', 'Hoa thủy tiên, cúa trắng, cúc dại tím, các loại lá đệm'),
(22, 4, 'Tinh khiết', 110000, 'xuan_4.jpg', 'Hồng trắng và salem'),
(23, 4, 'Mùa xuân chín', 150000, 'xuan_5.jpg', 'Hồmg cam, cúc xanh, thuỷ tiên và các loại lá'),
(24, 4, 'Rực rở nắng vàng', 75000, 'xuan_6.jpg', 'Hồng vàng và cúc vàng'),
(25, 3, 'Love Candy', 95000, 'hong_13.jpg', 'Hoa hồng trắng tinh khôi xen với hoa hồng màu hồng nhạt, điểm thêm baby trắng và lá măng'),
(26, 2, 'Happy Wedding', 210000, 'cuoi_9.jpg', 'Hoa hồng môn và các loại lá'),
(27, 1, 'Cúc nhiệt đới', 150000, 'cuc_15.jpg', 'Cúc vàng - hồng cam - lá măng'),
(28, 1, 'hoa cúc chào xuân ', 5000, '2014126094819.jpg', 'Hoa Cúc'),
(29, 1, 'hoa cúc chào xuân ', 50000, '2014204061643.jpg', 'cúc, ly, hồng'),
(30, 2, 'Hoa Cưới chào xuân ', 50000, '1904246_1440809849485963_1808227045_n.jpg', 'Hồng, Ly'),
(36, 1, 'Đón xuân', 50000, '', '<p>Hoa c&uacute;c c&aacute;c m&agrave;u: trắng, v&agrave;ng, cam<img alt=\"\" src=\"/ckfinder/userfiles/images/IMG_6017.JPG\" style=\"height:133px; width:200px\" /></p>\r\n'),
(37, 1, 'Hồn nhiên', 60000, '', '<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:100%\">\r\n	<tbody>\r\n		<tr>\r\n			<td>&nbsp;</td>\r\n			<td><span style=\"color:rgb(165, 42, 42)\">Hoa c&uacute;c v&agrave;ng, cam. l&aacute; măng</span></td>\r\n		</tr>\r\n		<tr>\r\n			<td><img alt=\"\" src=\"/ckfinder/userfiles/images/IMG_6017.JPG\" style=\"height:133px; width:200px\" /></td>\r\n			<td>&nbsp;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>&nbsp;</td>\r\n			<td>&nbsp;</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>&nbsp;</p>\r\n'),
(38, 1, 'Hoa Cưới Đẹp', 50000, '1904246_1440809849485963_1808227045_n.jpg', '<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:500px\">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt=\"\" src=\"/ckfinder/userfiles/images/IMG_6017.JPG\" style=\"height:100px; width:150px\" /></td>\r\n			<td>afafsf</td>\r\n		</tr>\r\n		<tr>\r\n			<td>&nbsp;</td>\r\n			<td>xada</td>\r\n		</tr>\r\n		<tr>\r\n			<td>&nbsp;</td>\r\n			<td>&nbsp;</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>&nbsp;</p>\r\n'),
(39, 4, 'hoaabc', 50000, '2014126094819.jpg', '<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:500px\">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt=\"\" src=\"/ckfinder/userfiles/images/2014126094819.jpg\" style=\"height:150px; width:200px\" /></td>\r\n			<td>fhfhfhf</td>\r\n		</tr>\r\n		<tr>\r\n			<td>&nbsp;</td>\r\n			<td>&nbsp;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>&nbsp;</td>\r\n			<td>&nbsp;</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>&nbsp;</p>\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
CREATE TABLE IF NOT EXISTS `khachhang` (
  `Makh` int(11) NOT NULL AUTO_INCREMENT,
  `TenDN` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MatKhau` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `HoTen` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DiaChi` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DienThoai` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quyen` int(11) NOT NULL,
  PRIMARY KEY (`Makh`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`Makh`, `TenDN`, `MatKhau`, `HoTen`, `DiaChi`, `DienThoai`, `Email`, `quyen`) VALUES
(1, 'phuong', 'phuong', 'Khuất Thuỷ Phuơng', '357 Lê Hồng Phong Q.5', '0989247123', 'tan9700721@yahoo.com', 1),
(2, 'cuong', 'cuong', 'Chung Quốc Cuờng', '1bis Nguyễn Văn Trổi Q.1', '0912345678', 'cqcuong@hcmuns.edu.vn', 0),
(3, 'tung', 'tung', 'Lưu Hải Tùng', '1 Mạc Đỉnh Chi Q.1', '0989766569', 'lhtung@yahoo.com', 0),
(4, 'dlthien', 'dlthien', 'Đỗ Lâm Thiên', '357 Lê Hồng Phong Q.10', '0903123456', 'dlthien@hcmuns.edu.vn', 0),
(5, 'thanh', 'thanh', 'Nguyễn Ngọc Thanh', '357 Lê Hồng Phong Q.10', '0903456789', 'lthanh@hcmuns.edu.vn', 0),
(21, 'HaiDang', '123', 'Võ Trần Hải Đăng', 'cmt8', '090829780', 'haidang@gmail.com', 0),
(7, 'dang', 'dang', 'hải đăng', '300 a ntt', '0809345677', 'tan9700721@yahoo.com', 0),
(8, 'phuong1', 'phuong1', 'hải đăng', '300 a ntt', '0809345677', 'CH1201150@gm.uit.edu.vn', 0),
(9, 'yen', 'yen', 'Yến', '300 a ntt', '0809345677', 'tan.yen.bin@gmail.com', 0),
(22, 'sang', '123', 'vntam', '200a ntt', '090829780', 'vntan@t3h.hcmus.edu.vn', 0),
(19, 'vntan', '123', 'Võ Ngọc Tân', 'ntt', '', 'vntan@ntt.edu.vn', 0),
(20, 'tan', '123', 'vntan', 'abc', '0908123456', 'abc@yahoo.com', 0);

-- --------------------------------------------------------

--
-- Table structure for table `loaihoa`
--

DROP TABLE IF EXISTS `loaihoa`;
CREATE TABLE IF NOT EXISTS `loaihoa` (
  `Maloai` int(11) NOT NULL AUTO_INCREMENT,
  `Tenloai` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`Maloai`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `loaihoa`
--

INSERT INTO `loaihoa` (`Maloai`, `Tenloai`) VALUES
(1, 'Hoa Quà tặng'),
(2, 'Hoa Hồng'),
(3, 'Hoa Tình Yêu'),
(4, 'Hoa Cưới'),
(16, 'Hoa Quà'),
(17, 'Hoa Quà1224');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
