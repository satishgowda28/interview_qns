function getDigit(num, idx) {
  return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;
}

getDigit(2345, 3);

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
digitCount(2345);

function mostDigits(arr) {
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    maxNum = Math.max(digitCount(arr[i]), maxNum);
  }

  return maxNum;
}

mostDigits([23, 4, 543, 1323]);

function radixSort(arr = []) {
  const maxIte = mostDigits(arr);

  for (let i = 0; i < maxIte; i++) {
    const bucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      const numAtI = getDigit(arr[j], i);
      bucket[numAtI].push(arr[j]);
    }
    arr = bucket.flat();
  }

  return arr;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
