/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/**
 * 思路：
 * 便利原字符串，周期性的添加到不同行的字符串中，最终多个字符串join
 * 寻找周期，当 numRows 为 3 的时候，其实是 0 1 2 1   周期长度 (numRows - 2) * 2 + 2 = 2 * numRows - 2
 *
 * 优点：复杂度为 O(max(2 * numRows - 2, s.length))
 * 缺点：需要额外存储空间
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s;
  const period = 2 * numRows - 2;
  const indexArr = []; // 里面存储 0 1 2 1
  const result = [];

  for (let i = 0; i < period; i++) {
    if (i <= period / 2) {
      indexArr.push(i);
      result.push(''); // 初始化每一行的数据
    } else {
      indexArr.push(period - i);
    }
  }
  for (let i = 0; i < s.length; i++) {
    result[indexArr[i % period]] += s[i];
  }
  return result.join('');
};
