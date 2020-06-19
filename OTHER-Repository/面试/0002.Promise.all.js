Promise.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError("You must pass array");
  }

  return new Promise(function (resolve, reject) {
    let count = promises.length;
    const result = Array(count).fill(null);

    function resolver(i) {
      return function (value) {
        result[i] = value;
        resolveAll();
      };
    }

    function rejecter(reason) {
      reject(reason);
    }

    function resolveAll() {
      if (result.every((i) => i)) {
        resolve(result);
      }
    }

    for (var i = 0; i < promises.length; i++) {
      promises[i].then(resolver(i), rejecter);
    }
  });
};
