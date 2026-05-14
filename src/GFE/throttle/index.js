function throttle(func, wait) {
  let isActive = false;
  return function (...args) {
    if (isActive) {
      return;
    }
    isActive = true;
    setTimeout(() => {
      isActive = false;
    }, wait);
    func.call(this, ...args);
  };
}
