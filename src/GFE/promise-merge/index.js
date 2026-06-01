/**
 * @param {Promise} p1
 * @param {Promise} p2
 * @return {Promise<any>}
 */
function isPlainObject(value) {
  if (value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype === null || prototype === Object.prototype) {
    return true;
  }
}
export default function promiseMerge(p1, p2) {
  return new Promise(async (resolve, reject) => {
    try {
      const [r1, r2] = await Promise.all([p1, p2]);
      // if(Object.prototype.toString.call(r1) !== Object.prototype.toString.call(r2)) {
      //   reject("Unsupported data types");
      // }
      if (
        (typeof r1 === "string" && typeof r2 === "string") ||
        (typeof r1 === "number" && typeof r2 === "number")
      ) {
        resolve(r1 + r2);
      }
      if (Array.isArray(r1) && Array.isArray(r2)) {
        const arr = [].concat(...[r1, r2]);
        resolve(arr);
      }
      if (isPlainObject(r1) && isPlainObject(r2)) {
        resolve({ ...r1, ...r2 });
      }
      reject("Unsupported data types");
    } catch (err) {
      reject(err);
    }
  });
}
try {
  await promiseMerge(Promise.reject(1), Promise.resolve(2));
} catch (err) {
  console.log(err);
}
