function isPlainObject(obj) {
  if (obj === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(obj);
  return prototype === null || prototype === Object.prototype;
}
/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
export default function deepEqual(valueA, valueB) {
  if (Array.isArray(valueA) && Array.isArray(valueB)) {
    if (valueA.length !== valueB.length) {
      return false;
    }
    return valueA.every((v, idx) => deepEqual(v, valueB[idx]));
  }
  if (isPlainObject(valueA) && isPlainObject(valueB)) {
    if (Object.keys(valueA).length !== Object.keys(valueB).length) {
      return false;
    }
    return Object.keys(valueA).every((key) => {
      if (Object.hasOwn(valueB, key)) {
        return deepEqual(valueA[key], valueB[key]);
      }
      return false;
    });
  }
  return valueA === valueB;
}

deepEqual("foo", "foo");
deepEqual([1, 2, 3], [1, 2, 4]);
deepEqual({ id: 1 }, { id: 1 });
deepEqual([{ id: "1" }], [{ id: "1" }]);
