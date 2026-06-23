function rotateArray(num = [], k = 1) {
  for (let i = 0; i < k; i++) {
    const f = num[0];
    for (let j = 0; j < num.length; j++) {
      num[j] = num[j + 1];
    }
    num[num.length - 1] = f;
  }
  return num;
}

rotateArray([1, 2, 3, 4, 5], 3);
