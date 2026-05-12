export default class EventEmitter {
  constructor() {
    this._eventMap = new Map();
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  on(eventName, listener) {
    let listeners = this._eventMap.get(eventName);
    if (listeners) {
      listeners.push(listener);
    } else {
      listeners = [listener];
    }
    this._eventMap.set(eventName, listeners);
    return this;
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  off(eventName, listener) {
    const listeners = this._eventMap.get(eventName) || [];
    const idx = listeners.findIndex((cb) => cb === listener);
    if (idx < 0) {
      return this;
    }
    listeners.splice(idx, 1);
    listeners.length;
    this._eventMap.get(eventName);
  }

  /**
   * @param {string} eventName
   * @param  {...any} args
   * @returns {boolean}
   */
  emit(eventName, ...args) {
    let listeners = this._eventMap.get(eventName) || [];
    listeners.length;
    if (listeners.length) {
      for (let cbFunc of listeners) {
        console.log(cbFunc);
        cbFunc.call(null, ...args);
      }
      return true;
    }
    return false;
  }
}

const emitter = new EventEmitter();

function addTwoNumbers(a, b) {
  sum = a + b;
}

let sum = 0;
emitter.on("foo", addTwoNumbers);
emitter.emit("foo", 2, 5);
sum;
emitter.off("foo", addTwoNumbers);
emitter.emit("foo", -3, 9);
sum;
