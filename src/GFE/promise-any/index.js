function promiseAny(promises) {
  let errors = new Array(promises.length);
  let count = 0;

  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      reject(new AggregateError(["empty array"]));
    }
    promises.forEach((promise, idx) => {
      Promise.resolve(promise).then(
        (value) => {
          resolve(value);
        },
        (error) => {
          errors[idx] = error;
          count++;
          if (count === errors.length) {
            reject(new AggregateError(errors));
          }
        },
      );
    });
  });
}

const p0 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(42);
  }, 400);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Err!");
  }, 100);
});

try {
  await promiseAny([p0, p1]);
} catch (err) {
  console.log(err instanceof AggregateError); // true
  console.log(err.errors); // [ 42, "Err!" ]
}
