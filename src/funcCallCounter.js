const wrapperFunction = (fn, n) => {
  let counter = 0;
  return (...args) => {
    counter++;

    if (counter % n === 0) {
      console.log("Hello there");
    }

    return fn.apply(null, args);
  };
};

const sumFunction = (a, b) => {
  return a + b;
};
const sumLog = wrapperFunction(sumFunction, 3);
sumLog(1, 2);
sumLog(3, 4);
sumLog(5, 6);
