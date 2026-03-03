export default function debounce(fn, delay) {
  let timerRef;
  return function (...args) {
    clearTimeout(timerRef);
    timerRef = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
