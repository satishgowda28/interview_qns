function pivot(arr = [], start = 0, end = arr.length - 1) {
  const swap = (arr, i, j) => {
    [arr[j], arr[i]] = [arr[i], arr[j]];
  };
  const pivotIdx = start;
  const pivotVal = arr[pivotIdx];
  let swapIdx = pivotIdx + 1;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, swapIdx);
      swapIdx++;
    }
  }
  swap(arr, pivotIdx, swapIdx - 1);
  return swapIdx - 1;
}
pivot([4, 8, 2, 1, 5, 7, 6, 3]);

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
quickSort([4, 8, 2, 1, 5, 7, 6, 3]);
quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);
