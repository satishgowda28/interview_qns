function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (err, value) => {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  };
}

function delayedResolve(cb) {
  setTimeout(() => {
    cb(null, 42);
  }, 10);
}
function asyncError(x, cb) {
  setTimeout(() => {
    cb(x);
  }, 10);
}
const promisified = promisify(asyncError);
try {
  await promisified(23);
} catch (err) {
  console.log(err);
}
