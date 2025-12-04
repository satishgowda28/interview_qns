function countNegative(arr) {
  let totalNegatives = 0;
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length === 0) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof value !== "number" || !Number.isFinite(value)) {
      return false;
    }
    if (value < 0) {
      totalNegatives += 1;
    }
  }

  return totalNegatives;
}
