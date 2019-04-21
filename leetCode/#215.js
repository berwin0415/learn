// 215 数组中第k个最大元素
let count = 0;
const findKthLargest = (nums, k) => {
    return nums.sort((a, b) => {
        count++
        return b - a;
    })[k - 1];
};
// const findKthLargest = (nums, k) => {
//     const len = nums.length - 1;
//     let count = 0
//     for (let i = len; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             count ++;
//             if (nums[j + 1] < nums[j]) {
//                 [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
//             }
//         }
//     }
//     console.log(count);

//     return nums[nums.length - k];
// };
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(count);

