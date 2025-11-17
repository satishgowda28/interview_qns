const promisify = (fn) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      const cb = (err, ...response) => {
        if (err) {
          return reject(err);
        }
        resolve(response.length > 1 ? response : response[0]);
      };
      try {
        fn(...args, cb);
      } catch (err) {
        reject(err);
      }
    });
  };
};

const add = (a, b, cb) => cb(null, a + b);
const fail = (cb) => cb("boom");
const multiply = (cb) => cb(null, 1, 2, 4);

const callbackify = (fn) => {
  return (...args) => {
    const cb = args.pop();
    Promise.resolve(fn(...args))
      .then((...values) => {
        cb(null, ...values);
      })
      .catch((err) => {
        cb(err, null);
      });
  };
};
