function unionBy(iteratee, ...arrays) {
  const unionArr = arrays.reduce((prev, curr) => {
    curr; //
    return [...prev, ...curr];
  }, []);
  const finalUnion = [];
  const set = new Set();
  for (let val of unionArr) {
    const cmpRes = iteratee(val);
    if (!set.has(cmpRes)) {
      set.add(cmpRes);
      finalUnion.push(val);
    }
  }
  return finalUnion;
}

const arr1 = [2.1, 1.2];
const arr2 = [2.3, 3.4];
const arr3 = [4.5, 2.6];
const iteratee = Math.floor;
unionBy(iteratee, arr1, arr2, arr3); //
