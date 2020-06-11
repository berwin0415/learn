const debounce = (fn, wait) => {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
};

const throttling = (fn, wait) => {
  let timer = null;
  return function () {
    if (!timer) {
      fn.apply(this, arguments);
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    }
  };
};
