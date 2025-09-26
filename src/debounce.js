export const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(null, ...args);
    }, delay);
  };
};

export const debounceWithOpt = (fn, delay, { immediate }) => {
  let timer;
  return (...args) => {
    const callNow = immediate && !timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      if (!immediate) {
        fn.call(null, ...args);
      }
    }, delay);
    if (callNow) {
      fn.call(null, ...args);
    }
  };
};

export const debounceWithReturn = (fn, delay) => {
  let timer;
  let lastReject;
  return (...args) => {
    if (lastReject) {
      lastReject({ canceled: true });
    }
    clearTimeout(timer);
    return new Promise((resolve, reject) => {
      lastReject = reject;
      timer = setTimeout(() => {
        lastReject = null;
        resolve(fn.call(null, ...args));
      }, delay);
    });
  };
};

export const debounceWithUtils = (fn, delay, { immediate = false } = {}) => {
  let timer;
  let funcArgs;
  let that; // because its regular function exp not arrow func where we have to handle "-this-"

  function debounced(...args) {
    const callNow = immediate && !timer;
    funcArgs = args;
    that = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      if (!immediate) {
        fn.call(that, ...args);
      }
    }, delay);

    if (callNow) {
      fn.call(that, ...args);
    }
  }

  debounced.cancel = function () {
    clearTimeout(timer);
    timer = null;
    funcArgs = that = null;
  };

  debounce.flush = function () {
    if (timer) {
      fn.call(that, ...args);
      clearTimeout(timer);
      timer = null;
      funcArgs = that = null;
    }
  };

  return debounced;
};

// export default debounce;
