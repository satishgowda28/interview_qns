function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] < val) {
      start = mid + 1;
    }
    if (arr[mid] > val) {
      end = mid - 1;
    }

    if (arr[mid] === val) {
      return mid;
    }
  }

  return -1;
}

binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  10,
);
binarySearch([1, 2, 3, 4, 5], 6);
