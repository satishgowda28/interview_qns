/* Solution by me */
function uniqueValue1(arr = []) {
  let i = 0;
  let j = 1;
  let count = 0;
  if (arr.length === 0) {
    return 0;
  }
  while (i <= arr.length - 2 && j <= arr.length - 1) {
    if (arr[i] !== arr[j]) {
      count += 1;
    }
    i++;
    j++;
  }
  return count + 1;
}

/* Solution by author but implemted by me */
function uniqueValue2(arr = []) {
  let i = 0;
  let j = 1;
  if (arr.length === 0) {
    return 0;
  }
  while (j <= arr.length - 1) {
    if (arr[i] !== arr[j]) {
      i += 1;
      arr[i] = arr[j];
    }
    j++;
  }
  return i + 1;
}

/* Solution in video by author */
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99]);
