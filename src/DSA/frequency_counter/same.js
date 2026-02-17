function same(arr1 = [], arr2 = []) {
  const sqMap = new Map();
  for (let num in arr1) {
    const sq = num * num;
    if (sqMap.has(sq)) {
      sqMap.set(sq, sqMap.get(sq) + 1);
    }
    sqMap.set(sq, 1);
  }
  for (let sq in arr2) {
    if (!sqMap.has(sq) || sqMap.has(sq) <= 0) {
      return false;
    }
    sqMap.set(sq, sqMap.get(sq) - 1);
  }

  return true;
}
