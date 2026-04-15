function debounce(fn, dealy, { immediate = false } = {}) {
  let timer;

  function utilWrapper() {}
  utilWrapper.cancel = function () {};
  utilWrapper.flush = function () {};

  return utilWrapper;
}
