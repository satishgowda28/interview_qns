/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;
  for (let tmp of set) {
    if (!set.has(tmp - 1)) {
      let count = 0;
      while (set.has(count + tmp)) {
        count++;
      }
      max = Math.max(max, count);
    }
  }

  return max;
};

longestConsecutive([100, 4, 200, 1, 3, 2]);
