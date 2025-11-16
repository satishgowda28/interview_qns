const _ = Symbol("_");
const partial = function (fn = () => {}, ...args) {
  const partialFunc =
    (...args1) =>
    (...args2) => {
      for (let i = 0; i < args1.length && args2.length; i++) {
        if (args1[i] === undefined) {
          args1[i] = args2.shift();
        }
      }

      const allArgs = [...args1, ...args2];
      return allArgs.includes(undefined) || allArgs.length < fn.length
        ? partialFunc(allArgs)
        : fn.apply(null, allArgs);
    };
  return partialFunc(...args);
};

const partial2 = function (fn, ...args) {
  const partialFunc = (...rmArgs) => {
    const merged = args.map((val, i) => {
      if (val === _) {
        const newVal = rmArgs.shift();
        return newVal;
      }
      return val;
    });
    const allArgs = [...merged, ...rmArgs];
    if (allArgs.includes(_) || allArgs.length < fn.length) {
      return partial2(fn, ...allArgs);
    }
    return fn.apply(null, allArgs);
  };
  return partialFunc;
};
