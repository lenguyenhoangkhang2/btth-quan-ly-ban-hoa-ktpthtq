<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Cua hang Hoa Dep</title>
<style type="text/css">
<!--
.style1 {color: #FF66FF}
.style2 {color: #000099}
.style3 {
	color: #FF0000;
	font-weight: bold;
}
.style4 {
	font-size: large;
	font-weight: bold;
	color: #009933;
}
-->
</style>
</head>

<body>
<table width="100%" border="0" cellpadding="0" cellspacing="0">
  <tr bgcolor="#f4fbeb">
    <td width="21%" valign="top"><img src="hinh_anh/LogotypeKvitka.gif" width="144" height="97" align="top" /></td>
    <td width="28%" valign="top"><table width="117%" border="0" cellpadding="0" cellspacing="2">
      <tr>
        <td><h2 class="style4">(08) 9891234 </h2></td>
      </tr>
      <tr>
        <td>(Giờ mở cửa: 8:00 - 22:00 mỗi ngày) </td>
      </tr>
      <tr>
        <td><img src="hinh_anh/IconMail.gif" width="16" height="16" /> <a href="./ktphuong@hcmuns.edu.vn">ktphuong@hcmuns.edu.vn </a></td>
      </tr>
      <tr>
        <td><img src="hinh_anh/online0.gif" width="18" height="18" />hoadep.com.vn</td>
      </tr>
    </table></td>
    <td colspan="3" valign="top"><form name="form1" method="post" action="trang_4.php">
      <table width="100%"  border="0" cellpadding="0" cellspacing="0" bordercolor="#BBE09D">
        <tr bgcolor="#F4F8E9">
          <td colspan="2" align="center" class="style1"><span class="style4"> T&igrave;m ki&#7871;m b&oacute; hoa </span></td>
          </tr>
        <tr>
          <td width="36%" bordercolor="#FFFFFF" bgcolor="#E8F6DC"><blockquote>
            <p>T&ecirc;n b&oacute; hoa: </p>
          </blockquote></td>
          <td width="64%" bordercolor="#FFFFFF" bgcolor="#E8F6DC"><input name="ten" type="text" id="ten" size="30"></td>
        </tr>
        <tr>
          <td align="center" bgcolor="#E8F6DC"><div align="left">
            <blockquote>
              <p>Bó hoa: </p>
            </blockquote>
          </div></td>
          <td align="center" bgcolor="#E8F6DC"><div align="left">
            <label>
            <select name="select">
			<?php	
			  // hien thi loai
			  		$file = fopen("du_lieu\hoa.txt","r",1);
						while(!feof($file))
						{
						$noi_dung = $noi_dung. fgets($file);
						}		
						fclose($file);

						$mang_loai = explode("/*",$noi_dung);
						$n = count($mang_loai);							
						for($i=1;$i<$n;$i++)
						{
							$mang = explode("|",$mang_loai[$i]);
							echo  "<option value='$mang[2]'>$mang[2]<img src='hinh_anh/$mang[4]'/></option>";
						}//for						
			?>
            </select>
            </label>
          </div></td>
        </tr>
        <tr>
          <td height="40" colspan="2" align="center" bgcolor="#E0F1CD">
            <input type="submit" name="Submit" value="Tìm kiếm">         </td>
        </tr>
      </table>
    </form></td>
  </tr>
  <tr bgcolor="#F4FBEB">
    <td valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td><table width="100%" border="0">
            <tr bgcolor="#F4FBEB">
              <td bgcolor="#C7EAB0"><span class="style3">Danh mục hoa </span></td>
            </tr>
            <tr bgcolor="#F4FBEB">
              <td><a href="trang_1.php">Trang ch&#7911;</a></td>
            </tr>
            <tr bgcolor="#F4FBEB">
              <td><a href="trang_2.php">T&igrave;m ki&#7871;m b&oacute; hoa </a></td>
            </tr>
            <tr bgcolor="#F4FBEB">
              <td><a href="trang_3.php">Th&ecirc;m m&#7899;i b&oacute; hoa </a></td>
            </tr>
          </table>		  </td>
      </tr>
      <tr>
        <td valign="bottom" bgcolor="#F4FBEB">&nbsp;</td>
      </tr>
    </table>    
    <img src="hinh_anh/BannerSideCreative.jpg" width="200" height="200" /></td>
    <td colspan="3" valign="top">
	(viết code hiển thị thông tin tìm kiếm)</td>
  </tr>
  <tr>
    <td valign="top" bgcolor="#c7eab0"><span class="style2">Copyright &copy;2003-2007 <br />
    Công ty thiết kế Ý Tưởng </span></td>
    <td valign="top" bgcolor="#c7eab0">&nbsp;</td>
    <td width="27%" valign="top" bgcolor="#c7eab0">&nbsp;</td>
    <td bgcolor="#c7eab0"><img src="hinh_anh/IconMail.gif" width="16" height="16" />
	<a href="./ktphuong@hcmuns.edu.vn">ktphuong@hcmuns.edu.vn</a>
	<br />
	<img src="hinh_anh/online0.gif" width="18" height="18" />hoadep.com.vn</td>
  </tr>
</table>
</body>
</html>
