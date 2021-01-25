// 合并两个有序链表
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(5, new ListNode(7)));

console.log(list1,JSON.stringify(mergeTwoLists(list1, list2)));

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 && l2) {
    const head = new ListNode(-1);
    let prev = head;
    while (l1?.next && l2?.next) {
      if (l1.val > l2.val) {
        prev.next = l1;
        l1 = l1.next;
      } else {
        prev.next = l2;
        l2 = l2.next;
      }
      prev = prev.next;
    }
    prev.next = l1?.next ? l1.next : l2?.next;
    return head.next;
  }
  return l1 || l2;
}
