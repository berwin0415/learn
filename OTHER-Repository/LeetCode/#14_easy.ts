// 最长公共前缀

function longestCommonPrefix(strs: string[]): string {
  if (strs.length) {
    const first = strs.shift()!;
    let common: string = "";
    if (first.length) {
      while (common.length < first.length) {
        const index = common.length;
        for (let i = 0; i < strs.length; i++) {
          const str = strs[i];
          if (str[index] !== first[index]) {
            return common;
          }
        }
        common += first[index];
      }
      return common;
    }
    return first;
  }
  return "";
}

console.log(longestCommonPrefix([]) === "");
console.log(longestCommonPrefix([""]) === "");
console.log(longestCommonPrefix(["", ""]) === "");
console.log(longestCommonPrefix(["flower", "flow", "flight"]) === "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]) === "");
console.log(
  longestCommonPrefix(["flower", "flower", "flower", "flower"]) === "flower"
);
