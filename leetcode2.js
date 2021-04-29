/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 纪念一下自己犯过的大错： Number类型是有界的 不能超大的数的字符串直接转Number去做运算
// 大数据场景下 只能使用字符串 + 进位 的方式
// var addTwoNumbers = function (l1, l2) {
// let str1 = ''
// let str2 = ''
// let list1 = l1;
// let list2 = l2;
// while(list1){
//   str1 = String(list1.val) + str1
//   list1 = list1.next
// }
// while(list2){
//   str2 = String(list2.val) + str2
//   list2 = list2.next
// }
// // console.log(str1)
// // console.log(str2)
// const resultStr = String(Number(str1) + Number(str2))
// const result = new ListNode();
// let cur = result;
// for (let i = resultStr.length-1;i>-1;i--){
//   const temp = new ListNode(resultStr[i],null)
//   cur.next = temp;
//   cur = temp
// }
// return result.next
// };

var addTwoNumbers = function (l1, l2) {
  const result = new ListNode();
  let cur = result;
  let plusNum = 0;
  while (l1 || l2) {
    // 复杂度只有 max(l1.length,l2.length)
    let sum = plusNum;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum > 9) {
      plusNum = 1;
      cur.next = new ListNode(sum - 10);
      cur = cur.next;
    } else {
      plusNum = 0;
      cur.next = new ListNode(sum);
      cur = cur.next;
    }
  }
  if (plusNum) cur.next = new ListNode(plusNum);

  return result.next;
};
