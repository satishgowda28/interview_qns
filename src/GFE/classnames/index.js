/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
function isPlainObj(obj) {
  if (obj === null) return false;
  const prototype = Object.getPrototypeOf(obj);
  return prototype === null || prototype === Object.prototype;
}
export default function classNames(...args) {
  let classname = [];
  for (let val of args.filter(Boolean)) {
    if (Array.isArray(val)) {
      const classVals = val.map((v) => classNames(v));
      classname = classname.concat(classVals);
      continue;
    }
    if (isPlainObj(val)) {
      const classVals = Object.entries(val).map(([k, v]) => {
        if (v) {
          return k;
        }
      });
      classname = classname.concat(classVals);
      continue;
    }
    classname.push(val);
  }

  return classname.join(" ");
}
classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "");
