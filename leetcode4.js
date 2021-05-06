/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/**
 * 思路：
 *  中位数 有两种可能，
 *  1. 当合并后的数组长度为奇数时，找中间位置 如长度为5时 找指针为 2 的  n -> Math.floor(n/2)
 *  2. ..................偶...，找中间两个位置的数，加起来除以2，如长度为4 找指针1和指针2的数 相加除以2
 *
 * 类似 合并有序数组或者有序链表 暴力 复杂度 O(m+n) 比较傻逼
 * 要达到 O(log(m+n)) 要使用 二分
 */

var findMedianSortedArrays = function (nums1, nums2) {
  const isEven = !((nums1.length + nums2.length) % 2);
  const flag = Math.floor((nums1.length + nums2.length) / 2);
  const result = [];
  let clgResult = null;
  let i = 0;
  let j = 0; // 这两个为 nums1 和 nums2 的指针
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
    if (result.length > flag) {
      if (isEven) {
        clgResult = (result[result.length - 1] + result[result.length - 2]) / 2;
      } else {
        clgResult = result[result.length - 1];
      }
      break;
    }
  }
  while (i < nums1.length && clgResult === null) {
    result.push(nums1[i]);
    i++;
    if (result.length > flag) {
      if (isEven) {
        clgResult = (result[result.length - 1] + result[result.length - 2]) / 2;
      } else {
        clgResult = result[result.length - 1];
      }
      break;
    }
  }

  while (j < nums2.length && clgResult === null) {
    result.push(nums2[j]);
    j++;
    if (result.length > flag) {
      if (isEven) {
        clgResult = (result[result.length - 1] + result[result.length - 2]) / 2;
      } else {
        clgResult = result[result.length - 1];
      }
      break;
    }
  }
  return clgResult;
};
