/**
 * @param {Function} func
 * @return {Function}
 */
export default function curry(func = function () {}) {
  const arity = func.length;
  function $curry(...args) {
    if (arity > args.length) {
      return $curry.bind(this, ...args);
    }
    return func.call(this, ...args);
  }
  return $curry;
}

function multiplyThreeNumbers(a, b, c) {
  return a * b * c;
}

const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers);
curriedMultiplyThreeNumbers(4)(5)(6); // 120
curriedMultiplyThreeNumbers()(4)()(5)(6);
