class NodeElem {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const node = new NodeElem(val);
    if (this.root === null) {
      this.root = node;
      return this.root;
    }
    let currNode = this.root;
    while (true) {
      const value = currNode.value;
      if (val > value) {
        if (currNode.right === null) {
          currNode.right = node;
          return this.root;
        }
        currNode = currNode.right;
      } else {
        if (currNode.left === null) {
          currNode.left = node;
          return this.root;
        }
        currNode = currNode.left;
      }
    }
  }
  bfs() {
    let tracker = [];
    let visited = [];
    tracker.push(this.root);
    while (tracker.length > 0) {
      const node = tracker.shift();
      if (node.left) {
        tracker.push(node.left);
      }
      if (node.right) {
        tracker.push(node.right);
      }
      visited.push(node);
    }
    return visited;
  }
  dfsPreOrder() {
    let tracker = [];
    function loop(node) {
      tracker.push(node.value);
      if (node.left) {
        loop(node.left);
      }
      if (node.right) {
        loop(node.right);
      }
    }
    loop(this.root);
    return tracker;
  }
  dfsPostORder() {
    let tracker = [];
    function loop(node) {
      if (node.left) {
        loop(node.left);
      }
      if (node.right) {
        loop(node.right);
      }
      tracker.push(node.value);
    }
    loop(this.root);
    return tracker;
  }
  dfsInorder() {
    let tracker = [];
    function loop(node) {
      if (node.left) {
        loop(node.left);
      }
      tracker.push(node.value);
      if (node.right) {
        loop(node.right);
      }
    }
    loop(this.root);
    return tracker;
  }
}

const bst = new BST();
/* bst.insert(50);
bst.insert(20);
bst.insert(60);
bst.insert(55);
bst.insert(65);
bst.insert(15);
bst.insert(40);
bst.insert(10);
bst.insert(18);
bst.insert(30);
bst.insert(45); */
bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
// bst.insert(14);
bst.insert(20);

// bst.bfs()

// bst.dfsPostORder();
bst.dfsInorder();
