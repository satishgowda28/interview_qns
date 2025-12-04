function smallestNumber(arr = []) {
  let min = Infinity;
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length === 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== number || !Number.isFinite(arr[i])) {
      return false;
    }
    min = Math.min(min, arr[i]);
  }

  return min;
}
