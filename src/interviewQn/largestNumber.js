function largestNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return false;
  }
  let max = -Infinity;
  for (let i; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) {
      return false;
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
