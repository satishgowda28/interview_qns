function linearSeach(arr = [], val) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
linearSeach([10, 15, 20, 25, 30], 15);
