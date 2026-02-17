/* My approach
It has two loops
I thought that its sliding window but its not
cause start -> start+num where start increases
but there are two loop a loop with in a loop
*/
function max_sum_naive(arr = [], num = 0) {
  if (arr.length === 0 || num === 0 || arr.length < num) {
    return null;
  }
  let total = 0;
  let start = 0;

  while (start <= arr.length - num) {
    let tempTotal = 0;
    for (let i = start; i < start + num; i++) {
      tempTotal += arr[i];
    }
    total = Math.max(total, tempTotal);
    start++;
  }

  return total;
}

/* This is actual approach towards sliding_window problem
  The windo here is the total of firt num elem 
  tempTotal where we substract or add on elem
  shifting the window
*/

function max_sum(arr = [], num = 0) {
  if (arr.length === 0 || num === 0 || arr.length < num) {
    return null;
  }
  let maxTotal = 0;
  let tempTotal = 0;
  for (let i = 0; i < num; i++) {
    maxTotal += arr[i];
  }
  tempTotal = maxTotal;

  for (let i = num; i < arr.length; i++) {
    tempTotal = tempTotal - arr[i - num] + arr[i];
    maxTotal = Math.max(tempTotal, maxTotal);
  }

  return maxTotal;
}
