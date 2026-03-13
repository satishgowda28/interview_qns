function bubbleSort(arr = [], comparator) {
  let n = arr.length - 1;
  let swapped = true;
  if (typeof comparator !== "function") {
    comparator = (a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    };
  }
  while (swapped) {
    swapped = false;
    for (let i = 0; i < n; i++) {
      if (comparator(arr[i], arr[i + 1]) > 0) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--;
  }
  return arr;
}
