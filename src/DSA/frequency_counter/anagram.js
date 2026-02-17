function validAnagram(str1 = "", str2 = "") {
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === str2) {
    return true;
  }
  /* Please use for loop, this just to see ho comples code i can write */
  const freqOfAlpaha = Array.prototype.reduce.call(
    str1,
    (prev, curr) => {
      prev.set(curr, (prev.get(curr) || 0) + 1);
      return prev;
    },
    new Map(),
  );

  for (let alpa of str2) {
    if (!freqOfAlpaha.get(alpa)) {
      return false;
    }
    freqOfAlpaha.set(alpa, freqOfAlpaha.get(alpa) - 1);
  }

  return true;
}
