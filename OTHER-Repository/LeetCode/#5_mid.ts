// 最长回文子串

// 测试
const longStr1 =
  "anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg";
console.log(
  "test 1:'babad'. ",
  longestPalindrome("babad") === "bab" || longestPalindrome("babad") === "aba"
);
console.log("test 2:'cbbd'. ", longestPalindrome("cbbd") === "bb");
console.log("test 3:''. ", longestPalindrome("") === "");
console.log("test 4:'a'. ", longestPalindrome("a") === "a");
console.log("test 5:'bb'. ", longestPalindrome("bb") === "bb");
console.log("test 5:longStr1. ", longestPalindrome(longStr1) === "hpyyph");

// /**
//  * 1. 暴力算法
//  *     思路：双层循环，枚举所有子串，逐一判断是否为回文子串
//  *     问题：长字符串超时
//  */
// function longestPalindrome(s: string) {
//   function isPalindrome(str: string) {
//     return str.split("").reverse().join("") === str;
//   }
//   if (s.length > 1) {
//     let result = "";
//     for (let i = 0; i < s.length; i++) {
//       for (let j = i + 1; j <= s.length; j++) {
//         const chunk = s.substring(i, j);
//         if (isPalindrome(chunk) && chunk.length > result.length) {
//           result = chunk;
//         }
//       }
//     }
//     return result;
//   }
//   return s;
// }

// /**
//  * 2. 动态规划
//  *     思路：S为字符串，i为起始位置，j为结束位置，当前子串P(i,j)为回文串需满足P(i+1,j-1)为字符串且首尾字符相等
//  *            如abcba为回文子串，需bcb为回文串，且首尾相等
//  *         1. 动态转移方程： P(i,j) = P(i+1,j-1)&(S[i] == S[j])
//  *         2. 边界： 子串长度为1或者2的情况
//  */
// function longestPalindrome(s: string) {
//   const len = s.length;
//   const dp: boolean[][] = Array.from(new Array(len), () =>
//     new Array(len).fill(false)
//   );
//   let ans = "";
//   // 枚举子串的长度-cl
//   for (let cl = 0; cl < len; cl++) {
//     // 枚举子串的起始位置-start
//     for (let start = 0; start < len; start++) {
//       // 获取子串的结束位置-end = start + cl
//       const end = start + cl;
//       // 防止结束位置下标超过字符串长度
//       if (end > len) {
//         break;
//       }
//       // 1 若子串长度为0，即为起始位置字符本身，设置对于dp为true
//       if (cl === 0) {
//         dp[start][end] = true;
//       // 2 若子串长度为1, 即为起始字符和结束字符，判断两个字符是否相等，如cc
//       } else if (cl === 1) {
//         dp[start][end] = s[start] === s[end];
//       // 3 其余情况，判断状态转移方程
//       } else {
//         dp[start][end] = dp[start + 1][end - 1] && s[start] === s[end];
//       }
//       // 若为回文子串，缓存最长回文子串
//       if (dp[start][end] && end + 1 - start > ans.length) {
//         ans = s.substring(start, end + 1);
//       }
//     }
//   }
//   return ans;
// }

/**
 * 3. 中心扩散
 *     思路：遍历每一个字符，以字符为中心向两侧扩展，找到最长子串下标
 */
function longestPalindrome(s: string) {
  function centerSpread(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1]
  }
  let start: number = 0;
  let end: number = 0;
  for (let i = 0; i < s.length; i++) {
    const [oddStart, oddEnd] = centerSpread(i, i);
    const [evenStart, evenEnd] = centerSpread(i, i + 1);
    if (oddEnd - oddStart > end - start) {
      start = oddStart;
      end = oddEnd;
    }
    if (evenEnd - evenStart > end - start) {
      start = evenStart;
      end = evenEnd;
    }
  }
  return s.substring(start, end + 1);
}
