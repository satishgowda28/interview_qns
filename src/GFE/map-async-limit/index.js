export default function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
  let result = new Array(iterable.length);
  let currCount = 0;
  let processed = 0;
  let idx = 0;
  return new Promise((resolve, reject) => {
    const loop = () => {
      if (processed === iterable.length) {
        return resolve(result);
      }
      while (
        currCount < Math.min(size, iterable.length) &&
        idx < iterable.length
      ) {
        const currIdx = idx;
        currCount++;
        idx++;
        const arg = iterable[currIdx];
        callbackFn(arg)
          .then((value) => {
            result[currIdx] = value;
            currCount--;
            processed++;
            loop();
          })
          .catch((err) => reject(err));
      }
    };
    loop();
  });
}

const double = (x) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 10);
  });
};
await mapAsyncLimit([1, 2, 3, 4, 5], double, 2); //
