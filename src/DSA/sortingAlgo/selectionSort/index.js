function selectionSort(arr = [], comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    };
  }
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[min], arr[j]) > 0) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
