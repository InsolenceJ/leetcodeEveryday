/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = String(x);
  let i = 0;
  let j = str.length - 1;
  let result = true;
  while (i < j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      result = false;
      break;
    }
  }
  return result;
};
// 更好的思路 反转一半 与 另一半比较 若相等 等返回true，并 判断负数等不可能成为回文数字的便捷条件
