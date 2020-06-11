function deepClone(data) {
  let container = null;
  if (Array.isArray(data)) {
    container = [];
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      container.push(deepClone(element));
    }
    return container;
  } else if (typeof data === "object") {
    container = {};
    for (i in data) {
      container[i] = deepClone(data[i]);
    }
    return container;
  } else {
    return data;
  }
}
const d = [{ a: 1 }, 2, { b: ["3", 4] }];
console.log(deepClone(d), deepClone(d) === d);
