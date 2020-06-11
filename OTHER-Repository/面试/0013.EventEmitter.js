const EventEmitter = (function () {
  let events = {};
  return {
    on: function (eventName, fn) {},
    emit: function (eventName, ...args) {},
    once: function (eventName, fn) {
      function once() {
        this.off(eventName, once);
        fn.apply(this, arguments);
      }
      once.fn = fn;
      this.on(eventName, once);
    },
    off(eventName, fn) {
      const fns = events[eventName];
      for (let i = 0; i < fns.length; i++) {
        const cb = fns[i];
        if (cb === fn || cb.fn === fn) {
          fns.splice(i, 1);
          break;
        }
      }
    },
  };
})();
