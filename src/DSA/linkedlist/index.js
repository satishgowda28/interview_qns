class NodeElem {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new NodeElem(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (this.head) {
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      newTail.next = null;
      this.tail = newTail;
      this.length -= 1;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }

      return current;
    } else {
      return undefined;
    }
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    let tmpHead = this.head;
    this.head = tmpHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return tmpHead;
  }
  unshift(val) {
    const node = new NodeElem(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    let data = this.head;
    while (idx > 0) {
      data = data.next;
      idx--;
    }
    return data;
  }
  set(idx, val) {
    let nodeVal = this.get(idx);
    if (!nodeVal) {
      return false;
    }
    nodeVal.val = val;
    return true;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) {
      return false;
    }
    if (idx === 0) {
      this.unshift(val);
      return true;
    }
    if (idx === this.length - 1) {
      this.push(val);
      return true;
    }
    const node = new NodeElem(val);
    const elem = this.get(idx - 1);
    const nextNodes = elem.next;
    node.next = nextNodes;
    elem.next = node;
    this.length++;
    return true;
  }
  remove(idx) {
    if (idx < 0 || idx > this.length) {
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
    const prev = this.get(idx - 1);
    const elemToDelet = prev.next;
    prev.next = elemToDelet.next;
    this.length--; //
    return true;
  }
  search(val) {
    if (!this.head) {
      return "Not found";
    }
    let idx = 0;
    let tmp = this.head;
    while (tmp.val !== val) {
      idx += 1;
      if (tmp.next === null) {
        return "Not found";
      }
      tmp = tmp.next;
    }
    return idx;
  }
  reverse() {
    if (this.head === null) {
      return null;
    }
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  rotate() {
    let temp = this.head;
    this.head = temp.next;
    this.tail = temp;
    this.tail.next = null;
  }
}

var list = new SinglyLinkedList();
list.unshift("YOOO");
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.push("<3");
list.push(":)");
list.insert(1, "HI");
// list.remove(1);
list.reverse();

// list.set(2, "::::")
// list.shift();
// list;

// list.pop();
// list.pop();
// list.pop();
// list.pop();
// list.pop();
