/**
 * @param {string} s
 * @return {number}
 */
// 初步思路：用map存储，键是单个字符，值是这个字符的index，用has判断
// 注意点： 移动指针i的的时候千万不要回溯 map.has(s[j]) && map.get(s[j]) >= i
// i是其实位置指针，j是结束位置指针，在这两者位置之外的数据直接忽略
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  const map = new Map();
  let i = 0;
  let j = 1;
  let maxLength = 1;
  map.set(s[0], 0);
  while (i < s.length - 1 && j < s.length) {
    if (map.has(s[j]) && map.get(s[j]) >= i) {
      i = map.get(s[j]) + 1;
    }
    map.set(s[j], j);
    j++;
    maxLength = Math.max(maxLength, j - i);
  }
  return maxLength;
};
