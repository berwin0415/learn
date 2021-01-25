function Person(name, age) {
  this.name = name;
  this.age = age;
}

function _new(Parent, ...args) {
  const obj = Object.create(Parent.prototype);
  Parent.apply(obj, args);
  return obj;
}

const personn = _new(Person, "321", 21);
console.log("test1: _new :", personn instanceof Person);
function _instanceof(obj, Fn) {
  // 判断传入的构造函数是不是函数类型
  if (typeof Fn !== "function") {
    throw new TypeError("不是函数");
  }

  // 实例不是对象, 返回false
  if (!obj || (typeof obj !== "object" && typeof obj !== "function")) {
    return false;
  }

  // 取 Fn的prototype原型比较
  let proto = Fn.prototype;

  while (obj.__proto__) {
    // 当实例的隐式原型__proto__ 全等于 Fn的显式原型 prototype，返回true
    if (obj.__proto__ === proto) return true;

    // 否则，继续向原型链上游移动
    obj = obj.__proto__;
  }
}
