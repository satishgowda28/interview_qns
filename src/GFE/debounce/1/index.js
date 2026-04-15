export function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.call(this, ...args);
    }, delay);
  };
}
