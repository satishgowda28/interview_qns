class NodeElem {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const node = new NodeElem(val);
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    return ++this.size;
  }
  pop() {
    if (this.size === 0) {
      return null;
    }

    const fNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      fNode.next = null;
    }
    this.size--;
    return fNode.value;
  }
}
