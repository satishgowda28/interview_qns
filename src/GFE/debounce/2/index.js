function debounceWrapper(func, delay) {
  let timer;
  let freshArgs;
  let that;
  const debounce = function (...args) {
    clearTimeout(timer);
    freshArgs = args;
    that = this;
    timer = setTimeout(() => {
      timer = null;
      func.call(this, ...args);
    }, delay);
  };
  debounce.cancel = function () {
    clearTimeout(timer);
    timer = null;
    freshArgs = null;
  };
  debounce.flush = function () {
    if (timer) {
      func.call(that, ...freshArgs);
      clearTimeout(timer);
      timer = null;
      freshArgs = null;
      that = nullÍ;
    }
  };
  return debounce;
}
