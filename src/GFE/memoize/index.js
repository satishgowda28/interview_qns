function memoize(fn) {
  const cache = new Map();
  const key = Symbol("RESULT");
  return function (...args) {
    let currentCache = cache;
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const isLast = i === args.length - 1;
      if (!currentCache.get(arg)) {
        currentCache.set(arg, new Map());
      }
      currentCache = currentCache.get(arg);
    }
    if (currentCache.has(key)) {
      return currentCache.get(key);
    }
    currentCache.set(key, fn.call(this, ...args));
    return currentCache.get(key);
  };
}

function expensiveFunction(...args) {
  console.log("Computing...");
  return args.reduce((p, c) => {
    return p + c;
  }, 0);
}

// Create a memoized version of the function.
const memoizedExpensiveFunction = memoize(expensiveFunction);

memoizedExpensiveFunction(1, 2, 3, 4);
memoizedExpensiveFunction(1, 2, 3, 4, 5);
memoizedExpensiveFunction(1, 2, 3);
memoizedExpensiveFunction(1, 2, 3, 4, 5, 6);
memoizedExpensiveFunction(1, 2, 3);
let count = 0;
function double(x) {
  count++;
  return x * 2;
}
const memoizedFn = memoize(double);
memoizedFn(1);
memoizedFn(1);
memoizedFn(1);
count;

class TireNode {
  constructor(v) {
    this._value = v;
    this._node = new Map();
  }
  getValue() {
    return this._value;
  }
  setValue(v) {
    this._value = v;
  }
  getNode(nodeKey) {
    return this._node.get(nodeKey);
  }
  addNode(nodeKey) {
    const newNode = new TireNode();
    this._node.set(nodeKey, newNode);
    return newNode;
  }
}
class Tire {
  constructor() {
    this._rootNode = new TireNode();
  }
  set(args, value) {
    let currNode = this._rootNode;
    for (const arg of args) {
      const nextNode = currNode._node.get(arg);
      if (!nextNode) {
        currNode = currNode.addNode(arg);
      } else {
        currNode = nextNode;
      }
    }
    currNode.setValue(value);
  }
  has(args) {
    let currNode = this._rootNode;
    for (const arg of args) {
      const nextNode = currNode._node.get(arg);
      if (!nextNode) {
        return false;
      }
      currNode = nextNode;
    }
    return true;
  }
  get(args) {
    let currNode = this._rootNode;
    for (const arg of args) {
      const nextNode = currNode._node.get(arg);
      currNode = nextNode;
    }
    return currNode.getValue();
  }
}

function memoize(fn) {
  const cache = new Tire();
  return function (...args) {
    if (cache.has(args)) {
      return cache.get(args);
    }
    const result = fn.call(this, ...args);
    cache.set(args, result);
    return result;
  };
}
function expensiveFunction(...args) {
  console.log("Computing...");
  return args.reduce((p, c) => {
    return p + c;
  }, 0);
}
const memoizedExpensiveFunction = memoize(expensiveFunction);
memoizedExpensiveFunction(1, 2, 3, 4);
