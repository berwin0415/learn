// 有效的括号

function isValid(s: string): boolean {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < s.length; i++) {
    const bit = s[i];
    if (["(", "{", "["].indexOf(bit) > -1) {
      stack.unshift(bit);
    } else {
      const target = stack.shift();
      if (target !== map[bit]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(isValid("()") === true);
console.log(isValid("()[]{}") === true);
console.log(isValid("(]") === false);
console.log(isValid("([)]") === false);
console.log(isValid("{[]}") === true);
