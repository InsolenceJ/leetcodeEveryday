/**
 * @param {number} x
 * @return {number}
 */
// 得益于 js 的 Number 类型是8个字节 2的30多次方根本无法限制 其他语言 int型变量 4 个字节会有影响
// 思考：js在处理 ipv6 地址 128位的时候 或许会出现问题  尤其在处理判断cidr格式的时候
var reverse = function (x) {
  let number;
  if (x < 0) {
    number = Number('-' + String(x).substring(1).split('').reverse().join(''));
  } else {
    number = Number(String(x).split('').reverse().join(''));
  }

  if (number < 0 - Math.pow(2, 31) || number > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return number;
  }
};
