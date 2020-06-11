Array.prototype.flat = function (number = 1) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (Array.isArray(element) && number > 0) {
      const r = element.flat(number - 1);
      this.splice(i, 1, ...r);
      i = i + r.length - 1;
    }
  }
  return this;
};
