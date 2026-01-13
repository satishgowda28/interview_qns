function classNames(...args) {
  let classes = [];
  const wrappreFunc = (...a) => {
    const clnArr = a.filter((elem) => !!elem);
    for (let i = 0; i < clnArr.length; i++) {
      const currElem = clnArr[i];
      if (Array.isArray(currElem)) {
        wrappreFunc(...currElem);
      } else if (currElem instanceof Object) {
        Object.entries(currElem).forEach(([key, value]) => {
          if (value) {
            classes.push(key);
          }
        });
      } else {
        classes.push(currElem);
      }
    }
  };
  wrappreFunc(...args);
  return classes.join(" ");
}
classNames(
  "foo",
  {
    bar: true,
    duck: false,
  },
  "baz",
  { quux: true }
);
