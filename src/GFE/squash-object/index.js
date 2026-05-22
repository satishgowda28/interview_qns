function squashObject(obj, pTxt = []) {
  let result = {};
  Object.entries(obj).forEach(([key, value]) => {
    const newKey = pTxt.concat(key).filter(Boolean).join(".");
    if (typeof value !== "object" || value == null) {
      Object.assign(result, { [newKey]: value });
    } else {
      Object.assign(result, squashObject(value, pTxt.concat(key)));
    }
  });
  return result;
}
const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: [3, 4, 5],
    },
  },
};
squashObject({
  a: 5,
  c: {
    f: 9,
  },
});
squashObject({
  foo: {
    "": 0,
    a: [],
  },
});

function traverse(object, path = []) {
  if (typeof object !== "object" || object === null) {
    return [path.join("."), object];
  }

  return Object.entries(object).flatMap(([key, value]) => {
    const newPath = key === "" ? [...path] : [...path, key];
    return traverse(value, newPath);
  });
}
