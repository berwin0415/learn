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
    constructor(){
        const obj = {
            on:function (args) {
                
            },
            publish:function (name, args) {
                
            }
        }

    }
}

{
    name:'',
        children: [{
            name:'',
            children:[{

            }]
        }]
}

const quickSort = arr => {
    // 找到数组标尺元素下角标
    const findCenter = (arr, left, right) => {
        let flag = arr[left]
        let idx = left + 1;
        for (let i = idx; i <= right; i++) {
            if (arr[i] < flag) {
                [arr[i], arr[idx]] = [arr[idx], arr[i]]
                idx++
            }
        }
        [arr[idx - 1], arr[left]] = [arr[left], arr[idx - 1]]
        return idx
    }
    const sort = (arr, left, right) => {
        if (left < right) {
            const center = findCenter(arr, left, right);
            sort(arr, left, center - 1)
            sort(arr, center, right)
        }
    }
    sort(arr, 0, arr.length - 1)
    return arr;
}
const data = Array(1000).fill(1).map((item, index) => 10000 - index)
const start = new Date();
console.log(quickSort(data))
const end = new Date()
console.log(end - start)