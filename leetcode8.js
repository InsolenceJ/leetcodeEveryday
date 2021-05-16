/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let result = '';
  let resultNum = 0;
  const MIN = 0 - Math.pow(2, 31);
  const MAX = Math.pow(2, 31) - 1;
  let deleteBlockDone = false;
  let needConfirmSymbol = true;
  let skipSymbolTimes = 0;
  let skipHeadZerolTimes = 0;
  let needDeleteHeadZero = true;
  let isNegative = false;
  let i;
  for (i = 0; i < s.length; i++) {
    // 去除 句头空格
    if (!deleteBlockDone && s[i] === ' ') continue;
    deleteBlockDone = true; // 句头空格删除完毕
    // 检查空格后的第一个字符 决定正负 仅会进入一次这个判断
    if (needConfirmSymbol) {
      if (s[i] === '-') {
        isNegative = true;
      }
      needConfirmSymbol = false;
    }

    if (needDeleteHeadZero) {
      if (s[i] === '0') {
        skipHeadZerolTimes++;
        continue;
      } else if ((s[i] === '+' || s[i] === '-') && skipHeadZerolTimes < 1 && skipSymbolTimes < 1) {
        skipSymbolTimes++;
        continue;
      } else {
        needDeleteHeadZero = false;
      }
    }

    if (!/[0-9]/.test(s[i])) break;
    result += s[i];
  }
  // 此时 result 是处理过后的字符串
  // 此时 isNegative 是最终结果的符号
  let j = result.length - 1;
  // 算数字的时候 从 尾 便利 到 头
  while (j > -1) {
    resultNum = resultNum + result[j] * Math.pow(10, result.length - j - 1);
    j--;
  }
  if (isNegative) resultNum = 0 - resultNum;
  if (resultNum < MIN) resultNum = MIN;
  if (resultNum > MAX) resultNum = MAX;
  return resultNum;
};
