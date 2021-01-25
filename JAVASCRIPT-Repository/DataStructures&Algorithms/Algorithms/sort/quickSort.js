// 快速排序

// const quickSort = arr => {
//     const sort = (arr) => {
//         const len = arr.length
//         if(len < 2) {return arr}

//         let flag = arr[0]
//         let left = [];
//         let right = [];

//         for (let i = 1; i < len; i++) {
//             if (arr[i]  < flag) {
//                 left.push(arr[i])
//             }else {
//                 right.push(arr[i])
//             }
//         }

//         return sort(left).concat(flag,sort(right))

//     }
//     return sort(arr)
// }
class a {
  constructor() {
    const obj = {
      on: function (args) {},
      publish: function (name, args) {},
    };
  }
}

const quickSort = (arr) => {
  // 找到数组标尺元素下角标
  const findCenter = (arr, start, end) => {
    let flag = arr[start];
    let idx = start + 1;
    for (let i = idx; i <= end; i++) {
      if (arr[i] < flag) {
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
        idx++;
      }
    }
    [arr[idx - 1], arr[start]] = [arr[start], arr[idx - 1]];
    return idx;
  };
  // 递归排序，直到左右指针相等为止
  const sort = (arr, left, right) => {
    if (left < right) {
      const center = findCenter(arr, left, right);
      sort(arr, left, center - 1);
      sort(arr, center, right);
    }
  };
  sort(arr, 0, arr.length - 1);
  return arr;
};
const data = Array(100)
  .fill(1)
  .map((item, index) => 100 - index);
const start = new Date();
// console.log(quickSort(data));
const end = new Date();
// console.log(end - start);
const quickSort2 = (arr) => {
  if (arr.length > 1) {
    const centerIndex = Math.floor(arr.length / 2);
    const center = arr.splice(centerIndex,1)[0]
    const left = []
    const right = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > center) {
            right.push(element)
        }else{
            left.push(element)
        }
    }
    return quickSort2(left).concat([center],quickSort2(right))
  }
  return arr;
};

console.log(quickSort2(data))