function removeDuplicates(arr) {
  // your code here
  return [...new Set(arr)];
}
removeDuplicates([1, 2, 2, 3, 4, 4]);
