/* Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1) */

function isSubsequence(str1, str2) {
  if (str2.length < str1.length) {
    return false;
  }
  if (str1 === str2) {
    return true;
  }
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    const char1 = str1[i];
    const char2 = str2[j];
    if (char1 === char2) {
      i += 1;
    }
    if (i === str1.length) {
      return true;
    }
    j += 1;
  }

  return false;
}
