/*
Frequency Counter - findAllDuplicates
Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
 */
function findAllDuplicates(arr = []) {
  const result = new Set();
  const map = new Map();
  for (let val of arr) {
    if (map.has(val)) {
      result.add(val);
    } else {
      map.set(val, true);
    }
  }
  return [...result];
}

function findAllDuplicates1(arr = []) {
  const map = new Map();

  for (let val of arr) {
    map.set(val, (map.get(val) || 0) + 1);
  }

  return [...map.entries()].reduce((prev, [num, count]) => {
    if (count > 1) {
      prev.push(num);
    }

    return prev;
  }, []); //
}
