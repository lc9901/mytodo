const util = require('util');
/**
 * 格式化日期
 */
exports.fmtDate = function (date, fmt) {
  if (util.isDate(date)) {
    var o = {
      "M+": date.getMonth() + 1, // 月份
      "d+": date.getDate(), // 日
      "H+": date.getHours(), // 小时
      "m+": date.getMinutes(), // 分
      "s+": date.getSeconds(), // 秒
      "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
      "S": date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }
  else {
    return date;
  }
}

exports.findTagsIndexInfoFromDB = function (columns) {
  let result = {};
  for (let i = 0; i < columns.length; i++) {
    switch (columns[i].toLowerCase()) {
      case "id":
        result.indexForID = i;
        break;
      case "description":
        result.indexForDesc = i;
        break;
      case "name":
        result.indexForName = i;
        break;
    }
  }
  return result;
}

exports.findTodosIndexInfoFromDB = function (columns) {
  let result = {};
  for (let i = 0; i < columns.length; i++) {
    result[`indexFor${columns[i]}`] = i;
  }
  return result;
}