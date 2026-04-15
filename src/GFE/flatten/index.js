export default function flatten(value = [], start = []) {
  return value.reduce((prev, curr) => {
    if (Array.isArray(curr)) {
      flatten(curr, prev);
    } else {
      prev.push(curr);
    }
    return prev;
  }, start);
}

flatten([1, [2, [3, [4, [5]]]]]);

/* 
[]
[1]
[1] [2, [3, [4, [5]]]]
[1,2] [3,[4,[5]]]
[1,2,3] [4,[5]]
[1,2,3,4] [5]
[1,2,3,4,5]
*/

function flatten2(value = []) {
  let result = [];
  for (let elem of value) {
    if (Array.isArray(elem)) {
      result.push(...flatten2(elem));
    } else {
      result.push(elem);
    }
  }
  return result;
}
flatten2([1, [2, [1, 2]], [123, [3, [123]]]]); //

function flatten3(value = []) {
  const result = [];
  function loopFunc() {}
  loopFunc(value);
  return result;
}

function flattenIterative(input) {
  const stack = [...input]; //
  const result = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back onto stack to process
      stack.push(...next);
    } else {
      result.push(next);
    }
  }
  return result.reverse();
}
flattenIterative([1, [2, [1, 2]], [123, [3, [123]]]]);

function flatenArray(arr = []) {
  let value = arr;
  while (value.some(Array.isArray)) {
    value = [].concat(...value);
  }
  return value;
}
flatenArray([1, [2, 3]]);
