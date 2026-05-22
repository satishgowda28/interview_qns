const source = {
  a: (value) => value > 0,
  b: (value) => value < 3,
};
function conformsTo(object, source) {
  return Object.entries(source).every(([key, fnc]) => {
    return (
      Object.hasOwn(source, key) &&
      Object.hasOwn(object, key) &&
      fnc(object[key])
    );
  });
}

conformsTo({ a: 1, b: 2 }, source);
conformsTo({ a: 1, b: 2 }, { b: (n) => n > 2 });
conformsTo({ a: 1 }, { c: (value) => value > 0 });
