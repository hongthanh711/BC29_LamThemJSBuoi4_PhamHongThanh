function getEle(id) {
  return document.getElementById(id);
}

// Bài 1

// Lấy dữ liệu
var ngay = getEle("ngay").value * 1;
var thang = getEle("thang").value * 1;
var nam = getEle("nam").value * 1;

// Bài 3
getEle("btn-doc").onclick = function () {
  var soNguyen = getEle("soNguyen").value * 1;

  var result = "";

  // Lấy số hàng trăm
  var hangTram = Math.floor(soNguyen / 100);
  switch (hangTram) {
    case 1: {
      result += " Một trăm";
      break;
    }
    case 2: {
      result += " Hai trăm";
      break;
    }
    case 3: {
      result += " Ba trăm";
      break;
    }
    case 4: {
      result += " Bốn trăm";
      break;
    }
    case 5: {
      result += " Năm trăm";
      break;
    }
    case 6: {
      result += " Sáu trăm";
      break;
    }
    case 7: {
      result += " Bảy trăm";
      break;
    }
    case 8: {
      result += " Tám trăm";
      break;
    }
    case 9: {
      result += " Chín trăm";
      break;
    }
  }

  // Lấy số hàng chục
  var hangChuc = Math.floor((soNguyen % 100) / 10);

  switch (hangChuc) {
    case 1: {
      result += " mười";
      break;
    }
    case 2: {
      result += " hai mươi";
      break;
    }
    case 3: {
      result += " ba mươi";
      break;
    }
    case 4: {
      result += " bốn mươi";
      break;
    }
    case 5: {
      result += " năm mươi";
      break;
    }
    case 6: {
      result += " sáu mươi";
      break;
    }
    case 7: {
      result += " bảy mươi";
      break;
    }
    case 8: {
      result += " tám mươi";
      break;
    }
    case 9: {
      result += " chín mươi";
      break;
    }
    case 0: {
      result += " lẻ";
      break;
    }
  }
  // Lấy số hàng đơn vị
  var hangDV = Math.floor(soNguyen % 100) % 10;
  switch (hangDV) {
    case 1: {
      result += " mốt";
      break;
    }
    case 2: {
      result += " hai";
      break;
    }
    case 3: {
      result += " ba";
      break;
    }
    case 4: {
      result += " bốn";
      break;
    }
    case 5: {
      if (hangChuc === 0) {
        result += " năm";
        break;
      } else {
        result += " lăm";
        break;
      }
    }
    case 6: {
      result += " sáu";
      break;
    }
    case 7: {
      result += " bảy";
      break;
    }
    case 8: {
      result += " tám";
      break;
    }
    case 9: {
      result += " chín";
      break;
    }
  }

  getEle("ketqua-doc").innerHTML = result;
};

// Bài 4

function tinhKhoangCach(tdX, tdY) {
  d = Math.sqrt((tdXTruong - tdX) ** 2 + (tdYTruong - tdY) ** 2);
  return d;
}

getEle("btn-td").onclick = function () {
  // Lấy dữ liệu
  var tenSV1 = getEle("tenSV1").value;
  var tdX1 = getEle("tdX1").value * 1;
  var tdY1 = getEle("tdY1").value * 1;

  var tenSV2 = getEle("tenSV2").value;
  var tdX2 = getEle("tdX2").value * 1;
  var tdY2 = getEle("tdY2").value * 1;

  var tenSV3 = getEle("tenSV3").value;
  var tdX3 = getEle("tdX3").value * 1;
  var tdY3 = getEle("tdY3").value * 1;

  var tdXTruong = getEle("tdXTruong").value * 1;
  var tdYTruong = getEle("tdYTruong").value * 1;

  // Khai báo biến
  var dSV1 = 0;
  var dSV2 = 0;
  var dSV3 = 0;
  var result = "";

  // Tính toán
  dSV1 = tinhKhoangCach(tdX1, tdY1);
  dSV2 = tinhKhoangCach(tdX2, tdY2);
  dSV3 = tinhKhoangCach(tdX3, tdY3);
  console.log(dSV1, dSV2, dSV3);

  // So sánh
  if (dSV1 > dSV2 && dSV1 > dSV3) {
    result = tenSV1 + " xa trường nhất";
  } else if (dSV2 > dSV1 && dSV2 > dSV3) {
    result = tenSV2 + " xa trường nhất";
  } else {
    result = tenSV3 + " xa trường nhất";
  }

  console.log(result);
};
