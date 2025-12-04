function chunkArray(arr, n) {
  // Your implementation
  let chunArry = [];
  let maxChuncSize = Math.ceil(arr.length / n);
  let i = 0;
  if (arr.length <= n) {
    return arr;
  }

  while (chunArry.length < maxChuncSize) {
    chunArry.push(arr.slice(i, i + n));
    i += n;
  }

  return chunArry;
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
chunkArray([1, 2, 3, 4, 5], 2);
