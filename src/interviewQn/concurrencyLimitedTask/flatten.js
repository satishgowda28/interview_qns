function flatten(value) {
  let result = [];
  for (let val of value) {
    if (Array.isArray(val)) {
      result.push(...flatten(val));
    } else {
      result.push(val);
    }
  }
  return result;
}
flatten([1, [2, [3]]]);
