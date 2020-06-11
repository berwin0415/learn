// 一定时间内重复触发不执行
const debounce = (fn, wait) => {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
};

// 一定时间内只执行一次
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