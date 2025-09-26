const throttleWithDate = (fn, delay) => {
  let prevTime = 0;
  return (...args) => {
    let now = Date.now();
    if (now - prevTime > delay) {
      fn.call(this, ...args);
    }
  };
};

export const throttleWithTimer = (
  fn,
  delay,
  { leading = true, trailing = true } = {}
) => {
  let isActive = false;
  let prevArgs;
  const cb = () => {
    if (trailing && prevArgs) {
      fn.call(this, ...prevArgs);
      prevArgs = null;
    }
    isActive = false;
  };
  return (...args) => {
    if (!isActive) {
      isActive = true;
      if (leading) {
        fn.call(this, ...args);
      } else {
        prevArgs = args;
      }
      setTimeout(cb, delay);
    } else {
      prevArgs = args;
    }
  };
};
