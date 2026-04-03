function merge(arr1 = [], arr2 = [], comparator) {
  let i = 0;
  let j = 0;
  let result = [];
  if (typeof comparator !== "function") {
    comparator = (a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    };
  }
  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr1[i], arr2[j]) < 0) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
