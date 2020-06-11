function bind(target) {
  const that = this
  return function () {
    that.apply(target, arguments);
  };
}
