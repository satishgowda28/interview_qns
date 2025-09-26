export const once = (fn) => {
  let funcCall = fn;
  let result;
  return (...args) => {
    if (funcCall) {
      result = funcCall.call(this, ...args);
      funcCall = null;
    }
    return result;
  };
};
