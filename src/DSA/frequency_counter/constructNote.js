/* 
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') //true
 */

function constructNote(str1, str2) {
  const keyMapStr1 = {};
  const keyMapStr2 = {};
  if (str1.length > str2.length) {
    return false;
  }
  for (let alpha of str1) {
    keyMapStr1[alpha] = (keyMapStr1[alpha] || 0) + 1;
  }
  for (let alpha of str2) {
    keyMapStr2[alpha] = (keyMapStr2[alpha] || 0) + 1;
  }
  for (key in keyMapStr1) {
    if (!keyMapStr2[key] || keyMapStr1[key] !== keyMapStr2[key]) {
      return false;
    }
  }
  return true;
}
