function countEvenNumbers (arr) {
  let totalEvenNumbers = 0;
  if(!Array.isArray(arr)){
    return false
  }
  if(arr.length === 0) {
    return totalEvenNumbers
  }

  for(let i = 0; i < arr.length; i++){
    const val = arr[i];
    if(typeof val !== "number" || !Number.isFinite(val)) {
      return false
    }
    if(val%2 === 0 || val === 0) {
      totalEvenNumbers += 1;
    }
  }

  return totalEvenNumbers
}