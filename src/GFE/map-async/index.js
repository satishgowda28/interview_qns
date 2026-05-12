function mapAsync(args = [], func) {
  return new Promise((resolve, reject) => {
    const promises = args.map((v) => func(v));
    Promise.all(promises).then(
      (result) => {
        resolve(result);
      },
      (err) => {
        reject(err);
      },
    );
  });
}

function mapAsync_(args = [], cbFunc) {
  let result = new Array(args.length);
  let idx;
  return new Promise((resolve, reject) => {
    args.forEach((v, i) => {
      cbFunc(v).then(
        (value) => {
          result[i] = value;
          idx++;
          if (idx === args.length) {
            resolve(result);
          }
        },
        (err) => {
          reject(err);
        },
      );
    });
  });
}

const asyncDouble = (x) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 10);
  });

const doubled = await mapAsync([1, 2], asyncDouble);
console.log(doubled);
