/* Works for only sorted arrays */
function sumZero(arr = []) {
  if (arr.length === 0) {
    return undefined;
  }
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right -= 1;
    } else {
      left += 1;
    }
  }
}

/* This works for both sorted and unsorted arrays */
function naiveSumZero(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      if (sum === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
