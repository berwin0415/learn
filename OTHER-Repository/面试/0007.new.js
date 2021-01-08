function Person(name, age) {
  this.name = name;
  this.age = age;
}

function _new(Parent, ...args) {
  const obj = Object.create(Parent.prototype);
  Parent.apply(obj, args);
  return obj;
}
