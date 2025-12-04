function groupBy(arr, key) {
  return arr.reduce((prev, curr) => {
    const val = curr[key];
    if (!prev[val]) {
      prev[val] = [];
    }
    prev[val].push(curr);
    return prev;
  }, {});
}
groupBy(
  [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
  ],
  "age"
);
