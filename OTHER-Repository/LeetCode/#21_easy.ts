// 合并两个有序链表
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(s: string): boolean {}
console.log(isValid("()") === true);
console.log(isValid("()[]{}") === true);
console.log(isValid("(]") === false);
console.log(isValid("([)]") === false);
console.log(isValid("{[]}") === true);
