class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key = "") {
    let total = 0;
    const MEDIAN = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const val = key[i];
      total = (total * MEDIAN + val.charCodeAt(0)) % this.keyMap.length;
    }
    return total;
  }
  set(key = "", value = "") {
    const hashId = this._hash(key);
    if (!this.keyMap[hashId]) {
      this.keyMap[hashId] = [];
    }
    this.keyMap[hashId].push([key, value]);
  }
  get(key) {
    const hashId = this._hash(key);
    const values = this.keyMap[hashId];
    if (values) {
      for (let i = 0; i < values.length; i++) {
        const valOfKey = values[i][0];
        if (key === valOfKey) {
          return values[i];
        }
      }
    }
    return undefined;
  }
  values() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      const keyVals = this.keyMap[i];
      keyVals?.forEach(([_, val], i) => {
        if (!values.includes(val)) {
          values.push(val);
        }
      });
    }
    return values;
  }
  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      const keyVals = this.keyMap[i];
      keyVals?.forEach(([key, _], i) => {
        if (!keys.includes(key)) {
          keys.push(key);
        }
      });
    }
    return keys;
  }
}

const ht = new HashTable(10);
ht.set("green", "Hey Green");
ht.set("red", "Hey Red");
ht.get("red");
ht.values();
ht.keys();
