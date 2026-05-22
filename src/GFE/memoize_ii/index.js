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
