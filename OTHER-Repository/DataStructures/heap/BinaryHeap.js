function left(i) {
  return i * 2 + 1;
}

function right(i) {
  return i * 2 + 2;
}

function swap(A, i, j) {
  [A[i], A[j]] = [A[j], A[i]];
}

class BinaryHeap {
  constructor(arr) {
    this.data = [...arr];
    this.size = this.data.length;
    this.rebuildHeap = this.rebuildHeap.bind(this);
    this.isHeap = this.isHeap.bind(this);
    this.sort = this.sort.bind(this);
    this.insert = this.insert.bind(this);
    this.delete = this.delete.bind(this);
    this.maxHeapify = this.maxHeapify.bind(this);
  }

  /**
   * 重构堆，形成最大堆
   */
  rebuildHeap() {
    const L = Math.floor(this.size / 2);
    for (let i = L - 1; i >= 0; i--) {
      this.maxHeapify(i);
    }
  }

  isHeap() {
    const L = Math.floor(this.size / 2);
    for (let i = L - 1; i >= 0; i--) {
      const l = this.data[left(i)] || Number.MIN_SAFE_INTEGER;
      const r = this.data[right(i)] || Number.MIN_SAFE_INTEGER;

      const max = Math.max(this.data[i], l, r);

      if (max !== this.data[i]) {
        return false;
      }
      return true;
    }
  }

  sort() {
    for (let i = this.size - 1; i > 0; i--) {
      swap(this.data, 0, i);
      this.size--;
      this.maxHeapify(0);
    }
  }

  insert(key) {
    this.data[this.size++] = key;
    if (this.isHeap()) {
      return;
    }
    this.rebuildHeap();
  }

  delete(index) {
    if (index >= this.size) {
      return;
    }
    this.data.splice(index, 1);
    this.size--;
    if (this.isHeap()) {
      return;
    }
    this.rebuildHeap();
  }

  /**
   * 交换父子节点位置，符合最大堆特征
   * @param {*} i
   */
  maxHeapify(i) {
    let max = i;

    if (i >= this.size) {
      return;
    }

    // 求左右节点中较大的序号
    const l = left(i);
    const r = right(i);
    if (l < this.size && this.data[l] > this.data[max]) {
      max = l;
    }

    if (r < this.size && this.data[r] > this.data[max]) {
      max = r;
    }

    // 如果当前节点最大，已经是最大堆
    if (max === i) {
      return;
    }

    swap(this.data, i, max);

    // 递归向下继续执行
    return this.maxHeapify(max);
  }
}
module.exports = BinaryHeap;
