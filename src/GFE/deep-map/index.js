/**
 * @param {any} value
 * @param {Function} fn
 * @returns any
 */
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
export default function deepMap(value, fn) {
  function loopTheValue(val, fn, ogVal) {
    if (Array.isArray(val)) {
      return val.map((v) => loopTheValue(v, fn, ogVal));
    } else if (isObject(val)) {
      return Object.fromEntries(
        Object.entries(val).map(([key, v]) => [
          key,
          loopTheValue(v, fn, ogVal),
        ]),
      );
    } else {
      return fn.call(ogVal, val);
    }
  }
  return loopTheValue(value, fn, value);
}
const double = (x) => x * 2;

deepMap(2, double);
deepMap({ a: 1, b: 2, c: 3 }, double);
deepMap(
  {
    foo: 1,
    bar: [2, 3, 4],
    qux: { a: 5, b: 6 },
  },
  double,
);
