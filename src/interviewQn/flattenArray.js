function flattenArray(arr) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      finalArr = finalArr.concat(flattenArray(arr[i]));
    } else {
      finalArr.push(arr[i]);
    }
  }

  return finalArr;
}

//For the purpose of user debugging.
flattenArray([1, [2, [3, 4], 5], 6]);
