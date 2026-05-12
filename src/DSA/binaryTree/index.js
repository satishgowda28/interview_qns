class NodeElem {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new NodeElem(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currNode = this.root;
    while (true) {
      currNode;
      const value = currNode.value;
      if (val > value) {
        if (currNode.right === null) {
          currNode.right = newNode;
          return this;
        }
        currNode = currNode.right;
      } else {
        if (currNode.left === null) {
          currNode.left = newNode;
          return this;
        }
        currNode = currNode.left;
      }
    }
  }
  find(val) {
    if (this.root === null) {
      return false;
    }
    let currNode = this.root;
    while (currNode !== null) {
      if (currNode.value === val) {
        return true;
      }
      currNode = val > currNode.value ? currNode.right : currNode.left;
    }
    return false;
  }
  remove(val, node = this.root) {
    if (node === null) {
      return null;
    }
    if (val > node.value) {
      node.right = this.remove(val, node.right);
      return node;
    } else if (val < node.value) {
      node.left = this.remove(val, node.left);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        let rNode = node.right;
        while (rNode.left !== null) {
          rNode = rNode.left;
        }
        node.value = rNode.value;
        node.right = this.remove(rNode.value, node.right);
        return node;
      }
    }
  }
  findSecondLargest() {
    let currentNode = this.root;
    while (true) {
      if (
        currentNode.right !== null &&
        currentNode.right.right === null &&
        currentNode.right.left === null
      ) {
        return currentNode.value;
      }
      if (currentNode.right === null && currentNode.left !== null) {
        let target = currentNode.left;
        while (target.right !== null) {
          target = target.right;
        }
        target.value;
      }
      currentNode = currentNode.right;
    }
  }
  isValidBST(node = this.root, min = -Infinity, max = Infinity) {
    // Base case: We hit the bottom safely
    if (node === null) return true;

    // The Boundary Check!
    if (node.value <= min || node.value >= max) {
      return false;
    }

    // Traverse Left (Update the MAX allowed value)
    let isLeftValid = this.isValidBST(node.left, min, node.value);

    // Traverse Right (Update the MIN allowed value)
    let isRightValid = this.isValidBST(node.right, node.value, max);

    // Both sides must be true!
    return isLeftValid && isRightValid;
  }
}

const bst = new BST();
bst.insert(50);
bst.insert(40);
bst.insert(70);
bst.insert(30);
bst.insert(45);
bst.insert(60);
bst.insert(80);
bst.insert(75);
bst.insert(90);
bst.insert(55);
bst.insert(65);
bst.insert(63);
bst.insert(54);
bst.insert(56);

bst.remove(60);

// bst.isValidBST();
