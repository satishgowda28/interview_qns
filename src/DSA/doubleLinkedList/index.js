class NodeElem {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }
  push(val) {
    const node = new NodeElem(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const tailElem = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      tailElem.prev = null;
    }
    this.length--;
    return tailElem;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    const tmpNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      tmpNode.next = null;
    }
    this.length--;
    return tmpNode;
  }
  unshift(val) {
    const node = new NodeElem(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    let current;
    if (idx <= this.length / 2) {
      current = this.head;
      let count = 0;
      while (count !== idx) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      let count = this.length - 1;
      while (count !== idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(idx, v) {
    const node = this.get(idx);
    if (!node) {
      return false;
    }
    node.value = v;
    return true;
  }
  insert(idx, val) {
    const beforeNode = this.get(idx - 1);
    if (!beforeNode) {
      return false;
    }
    const newNode = new NodeElem(val);
    const afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) {
      return false;
    }
    if (idx === 0) {
      this.shift();
      return true;
    }
    if (idx === this.length - 1) {
      this.pop();
      return true;
    }
    const elemToDelete = this.get(idx);
    const inFront = elemToDelete.prev;
    const inBack = elemToDelete.next;
    inFront.next = inBack;
    inBack.prev = inFront;
    elemToDelete.next = null;
    elemToDelete.prev = null;
    this.length--;
  }
}

const dLL = new DoubleLinkedList();
dLL.push(100);
dLL.push(200);
dLL.push(300);
dLL.push(400);
dLL.push(500);
dLL.push("LAST ITEM");

dLL.get(2);

dLL.insert(1, 150);
dLL;

dLL.remove(1);
dLL;
