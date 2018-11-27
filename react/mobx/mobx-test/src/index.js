function log(target) {
  const desc = Object.getOwnPropertyDescriptors(target.prototype);

  for (const key of Object.keys(desc)) {
    if (key === "constructor") {
      continue;
    }
    const func = desc[key].value;

    if ("function" === typeof func) {
      Object.defineProperty(target.prototype, key, {
        value(...args) {
          console.log("before" + key);
          const ret = func.apply(this, args);
          console.log("after" + key);
          return ret;
        }
      });
    }
  }
}

function readOnly(target, key, descriptor) {
  descriptor.writable = false;
}

function validate(target, key, descriptor) {
  const func = descriptor.value;
  descriptor.value = function(...args) {
    for (const num of args) {
      if ("number" !== typeof num) {
        throw new Error(`${num} is not number`);
      }
    }
    return func.apply(this, args);
  };
}

@log
class Numberic {
  @readOnly PI = 3.1415926;

  @validate
  add(...nums) {
    return nums.reduce((p, n) => p + n, 0);
  }
}
// console.log(Numberic)
let a = new Numberic();
a.PI = 1;
a.add(1, 2);
