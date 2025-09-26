const compose = (...fn) => {
  return fn.length
    ? (...args) =>
        fn.reduceRight(
          (nextArg, nextFunc) => [nextFunc.apply(null, nextArg)],
          args
        )[0]
    : (...args) => args;
};
const pipe = (...fn) => {
  return fn.length
    ? (...args) =>
        fn.reduce(
          (nextArg, nextFunc) => [nextFunc.apply(null, nextArg)],
          args
        )[0]
    : (...args) => args;
};

const promisify = (fn) => {
  return (...args) =>
    new Promise((resolve, reject) =>
      fn(...args, (err, data) => (err ? reject(err) : resolve(data)))
    );
};

const sum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};
const double = (val) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val * 2);
    }, 2000);
  });
};

const composeAsync = (...fn) => {
  return async (...args) =>
    await fn.reduceRight(async (acc, nextFunc) => {
      const arg = await acc;
      return nextFunc(...(Array.isArray(arg) ? arg : [arg]));
    }, Promise.resolve(args));
};

const sumNDoub = composeAsync(double, sum);
await sumNDoub(2, 3);
