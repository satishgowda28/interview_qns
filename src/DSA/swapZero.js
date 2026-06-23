function swapZero(num = []) {
  let j = 0;
  for (let i = 0; i < num.length; i++) {
    const val = num[i];
    if (val !== 0) {
      [num[j], num[i]] = [num[i], num[j]];
      j++;
    }
  }
  return num;
}
