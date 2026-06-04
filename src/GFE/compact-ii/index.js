function isPlainObj(obj) {
  if (obj === null) {
    return false;
  }
  const proto = Object.getPrototypeOf(obj);
  return proto === null || proto === Object.prototype;
}
export default function compact(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean).map((val) => compact(val));
  }
  if (isPlainObj(value)) {
    let keyVal = [];
    for (let [key, val] of Object.entries(value)) {
      if (val) {
        keyVal.push([key, compact(val)]);
      }
    }
    return Object.fromEntries(keyVal);
  }
  return value;
}
compact({ foo: null, bar: { baz: null, qux: 2 } });
