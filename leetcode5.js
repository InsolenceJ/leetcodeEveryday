/**
 * @param {string} s
 * @return {string}
 */
// 分析：对于每一个位置i 都应该检查i-1是否等于i+1，还应该检查i是否等于i+1

// 小笔记：
//  str的 substring 与 substr 用法区别
// substring(startIndex, endIndex) 包头不包尾
// substr(startIndex, length)
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  const result = {
    maxLength: 1,
    start: 0,
  };
  let i;
  for (i = 0; i < s.length; i++) {
    // i是指主串中的指针位置
    // 1、检查 以i为中心 的最长回文子串
    if (i - 1 > -1 && i + 1 < s.length) {
      // 防止越界
      findStartAndEnd(s, i - 1, i + 1, result);
    }

    // 2、当 i 和 i+1 相等时 检查 以 i 和 i+1 为中心的最长回文子串
    if (i + 1 < s.length && s[i] === s[i + 1]) {
      // 防止越界
      findStartAndEnd(s, i, i + 1, result);
    }
  }
  return s.substr(result.start, result.maxLength);
};

function findStartAndEnd(s, left, right, result) {
  while (left > -1 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  if (right - left - 1 > result.maxLength) {
    result.start = left + 1;
    result.maxLength = right - left - 1;
  }
}
