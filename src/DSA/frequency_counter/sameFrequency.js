/* Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
 */
function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) {
    return false;
  }
  const numFreqObj = {};
  for (let num of str1) {
    numFreqObj[num] = (numFreqObj[num] || 0) + 1;
  }
  for (let num of str2) {
    if (!numFreqObj[num]) {
      return false;
    }
    numFreqObj[num] -= 1;
  }
  return true;
}
