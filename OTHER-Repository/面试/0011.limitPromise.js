class LimitPromise {
  constructor(max) {
    this.max = max;
    this.count = 0;
    this.task = [];
  }

  call(fn, ...args) {
    return new Promise((resolve, reject) => {
      const task = this.createTask(fn, args, resolve, reject);
      if (this.count > this.max) {
        this.task.push(task);
      } else {
        task();
      }
    });
  }

  createTask(fn, args, resolve, reject) {
    return () => {
      fn(...args)
        .then(resolve)
        .catch(reject)
        .finally(() => {
          this.count--;
          if (this.task.length) {
            let task = this.task.shift();
            task();
          }
        });
      this.count++;
    };
  }
}
