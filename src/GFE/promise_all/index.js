function promiseAll(args) {
  let result = new Array(args.length);
  let count = 0;
  return new Promise((resolve, reject) => {
    if (args.length === 0) {
      resolve([]);
    }
    args.forEach((p, idx) => {
      Promise.resolve(p)
        .then((value) => {
          result[idx] = value;
          count++;
          if (count === args.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
