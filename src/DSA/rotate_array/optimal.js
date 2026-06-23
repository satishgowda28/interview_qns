function rotateArray(num = [], k = 1) {
  let i = 0;
  let j = num.length - 1;
  k = k % num.length;
  loop(num, i, j);
  i = 0;
  j = k - 1;
  loop(num, i, j);
  i = k;
  j = num.length - 1;
  loop(num, i, j);

  return num;
}
function loop(arr = [], i, j) {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}

rotateArray([1, 2, 3, 4, 5], 2);

/* 
  0 -> k-1
  k -> len - 1
  0 -> len - 1
  to rotate other way round
*/
