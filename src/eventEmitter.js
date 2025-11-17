class CustomEvent {
  constructor() {
    this.events = {};
  }
  on(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(cb);
    return this;
  }
  off(event, cb) {
    if (!this.events[event]) {
      return this;
    }
    this.events[events] = this.events[events].filter((fn) => {
      return fn !== cb;
    });
    return this;
  }
  once(event, cb) {
    const wrapper = (...args) => {
      cb(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
    return this;
  }
  emit(event, ...args) {
    if (!this.events[event]) {
      return false;
    }
    [...this.events[event]].forEach((cb) => {
      cb(...args);
    });
  }
}
