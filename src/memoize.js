export const memoizeOLD = (fn) => {
  const cache = {};
  const PRIMITIVE = ["number", "string", "boolean"];
  return (...args) => {
    let cStr = "";
    if (args.length === 1 && PRIMITIVE.includes(typeof args[0])) {
      cStr = args[0];
    } else {
      cStr = JSON.stringify(args);
    }
    return cStr in cache ? cache[cStr] : (cache[cStr] = fn.call(this, ...args));
  };
};

export const memoize = (fn) => {
  const cache = new Map();

  return function (...args) {
    debugger;
    let currentCache = cache;
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const isLast = i === args.length - 1;
      const isPrimitive =
        arg !== null && typeof arg !== "function" && typeof arg !== "object";

      if (!currentCache.has(arg)) {
        if (isLast) {
          currentCache.set(arg, fn.call(this, ...args));
          return currentCache.get(arg);
        }
        currentCache.set(arg, new Map());
      }
      currentCache = currentCache.get(arg);
    }
    return currentCache;
  };
};
