// 215 数组中第k个最大元素

// const findKthLargest = (nums, k) => {
//     const len = nums.length - 1;
//     for (let i = len; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (nums[j + 1] < nums[j]) {
//                 [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
//             }
//         }
//     }
//     return nums[nums.length - k];
// };

//优化
const findKthLargest = (nums, k) => {
    const len = nums.length - 1;
    for (let i = len; i > k; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j + 1] < nums[j]) {
                [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
            }
        }
    }
    return nums[nums.length - k];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4,7], 2));

