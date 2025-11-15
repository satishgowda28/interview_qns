/* function mapAsyncLimit(
  arr = [],
  limit = 1,
  asyncFn = (v) => Promise.resolve(v)
) {
  let result = [];
  const totalResult = arr.length;
  return new Promise((resolve, reject) => {
    const runTaks = () => {
      if (result.length === totalResult && arr.length === 0) {
        resolve(result);
        return;
      }
      const subArr = arr.splice(0, limit);
      const promiseArr = subArr.map((v) => asyncFn(v));
      Promise.all(promiseArr)
        .then((values) => {
          console.log(values);
          result = [...result, ...values];
        })
        .catch(reject)
        .finally(() => {
          runTaks();
        });
    };
    runTaks();
  });
} */

function mapAsyncLimit(arr = [], limit = 1, asyncFn) {
  let result = new Array(arr.length);
  let currNoOfTask = 0;
  let idx = 0;
  return new Promise((resolve, reject) => {
    const runTaks = () => {
      if (result.length === idx && currNoOfTask === 0) {
        return resolve(result);
      }
      while (currNoOfTask < limit && arr.length !== 0) {
        const currId = idx;
        idx++;
        currNoOfTask++;
        const taskId = arr.shift();
        Promise.resolve(asyncFn(taskId))
          .then((value) => {
            result[currId] = value;
          })
          .catch(reject)
          .finally(() => {
            currNoOfTask -= 1;
            runTaks();
          });
      }
    };
    runTaks();
  });
}

const delayDoubleFnc = (x) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(x * 2);
    }, 100 * x)
  );

window.delayDoubleFnc = delayDoubleFnc;
window.mapAsyncLimit = mapAsyncLimit;
// mapAsyncLimit([2, 3, 4, 5, 6, 7], 2, delayDoubleFnc)
//   .then(console.log)
//   .catch(console.error);
