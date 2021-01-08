class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class NodeList {
  constructor(arr) {
    let head = new Node(arr.shift());
    let next = head;
    arr.forEach((item) => {
      next.next = new Node(item);
      next = next.next;
    });
    return head;
  }
}

// 交换两个节点的值
const swap = (p, q) => {
  const val = p.val;
  p.val = q.val;
  q.val = val;
};

// 寻找基准元素的节点
const partion = (begin, end) => {
  const val = begin.val;
  let p = begin;
  let q = begin.next;
  while (q !== end) {
    if (q.val < val) {
      p = p.next;
      swap(p, q);
    }
    q = q.next;
  }
  swap(p, begin);
  return p;
};

const sort = (begin, end) => {
  if (begin !== end) {
    const part = partion(begin, end);
    sort(begin, part);
    sort(part.next, end);
  }
};

let chain = new NodeList([4,2]);
sort(chain, null);
const arr = [];
while (chain) {
  arr.push(chain.val);
  chain = chain.next;
}
console.log(arr);
