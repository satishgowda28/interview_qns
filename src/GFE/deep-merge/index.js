function isObject(obj) {
  if (obj === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(obj);
  if (prototype === null || prototype === Object.prototype) {
    return true;
  }
  return false;
}

export default function deepMerge(valA, valB) {
  if (Array.isArray(valA) && Array.isArray(valB)) {
    return [...valA, ...valB];
  }
  if (isObject(valA) && isObject(valB)) {
    const result = { ...valA };
    Object.entries(valB).forEach(([key, val]) => {
      if (Object.hasOwn(result, key)) {
        if (
          (Array.isArray(result[key]) && Array.isArray(val)) ||
          (isObject(result[key]) && isObject(val))
        ) {
          result[key] = deepMerge(result[key], val);
        } else {
          result[key] = val;
        }
      } else {
        result[key] = val;
      }
    });

    return result;
  }
}

// deepMerge([1, 2], [3, 4]);
// deepMerge({ a: 1 }, { a: 2 });
// deepMerge({ a: 1, b: [2] }, { b: [3, 4] });
deepMerge(
  { foo: 3, bar: { baz: 5, qux: 20 } },
  { foo: 30, blah: 0, bar: { baz: 10, qux: [6, 7], boo: 5 } },
);
