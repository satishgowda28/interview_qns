/* Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n) */
/* brute */
function findLongestSubstring(str) {
  let alpaConcat = "";
  let maxCount = 0;
  for (let a of str) {
    const idx = alpaConcat.indexOf(a);
    if (idx === -1) {
      alpaConcat += a;
    } else {
      alpaConcat = alpaConcat.slice(idx + 1) + a;
    }
    maxCount = Math.max(maxCount, alpaConcat.length);
  }
  return maxCount;
}

/* Actual implementation */
function findLongestSubstring(str) {
  let start = 0;
  let maxLength = 0;
  let objMap = {};
  for (let i = 0; i < str.length; i++) {
    const alpha = str[i];
    objMap;
    if (alpha in objMap) {
      const idx = objMap[alpha];
      start = idx > start ? idx + 1 : start;
    }
    objMap[alpha] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}
