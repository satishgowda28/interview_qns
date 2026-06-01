function isPlainobject(obj) {
  if (obj === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(obj);
  return prototype === null || prototype === Object.prototype;
}
/**
 * @param {any} val
 * @param {Array<string>} keys
 * @returns any
 */
export default function deepOmit(val, keys = []) {
  if (Array.isArray(val)) {
    return val.map((v) => deepOmit(v, keys));
  }
  if (isPlainobject(val)) {
    const obj = {};
    for (let key in val) {
      if (!keys.includes(key)) {
        obj[key] = deepOmit(val[key], keys);
      }
    }
    return obj;
  }

  return val;
}

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
  f: [5, 6],
};
deepOmit(obj, ["b", "c", "e"]);
