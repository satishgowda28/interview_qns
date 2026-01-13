/* this is asper ECMAScript specification */
Array.prototype.myConcat = function (...items) {
  const tempArray = Array.from(this);
  let len = this.length;

  items.forEach(function (item) {
    if (Array.isArray(item)) {
      let idx = 0;
      const iLen = item.length;
      while (idx < iLen) {
        const isAPart = Object.hasOwn(item, idx);
        if (isAPart) {
          tempArray[len] = item[idx];
          idx += 1;
          iLen += 1;
        }
      }
    } else {
      tempArray[len] = item;
      len += 1;
    }
  });
  return tempArray;
};

[1, 2, 3].myConcat([4, 5, 6]); // [1, 2, 3, 4, 5, 6]
[1, 2, 3].myConcat(4, 5, 6); // [1, 2, 3, 4, 5, 6]
[1, 2, 3].myConcat(4, [5]);

Array.prototype.myConcat_myvariant = function (...items) {
  let tempArra = this.slice(0);
  for (let i = 0; i < items.length; i++) {
    if (Array.isArray(items[i])) {
      tempArra = [...tempArra, ...items[i]];
    } else {
      tempArra.push(items[i]);
    }
  }
  return tempArra;
};
