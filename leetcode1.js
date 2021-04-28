/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map(); // map的key->值  value->索引 原因在于最后需要返回索引  直接使用map.get()即可
  for (let i = 0; i < nums.length; i++) {
    const temp = target - nums[i]; // 遍历到每一项的时候 检查这一项需要的互补项是否存在
    if (map.has(temp)) {
      return [map.get(temp), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
