// 罗马数字转整数

function romanToInt(s: string): number {
  let num: number = 0;
  const map: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  while (s) {
    if (s[0] && s[1]) {
      if (map[s[0]] < map[s[1]]) {
        num += map[s[1]] - map[s[0]];
        s = s.slice(2);
        continue;
      }
    }
    num += map[s[0]];
    s = s.slice(1);
  }
  return num;
}
console.log(romanToInt("III") === 3);
console.log(romanToInt("IV") === 4);
console.log(romanToInt("IX") === 9);
console.log(romanToInt("LVIII") === 58);
console.log(romanToInt("MCMXCIV") === 1994);
