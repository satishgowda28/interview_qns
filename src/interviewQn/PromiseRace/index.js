function promiseRace(promises) {
  // Your implementation

  return new Promise((resolve, reject) => {
    if (promises && promises.length) {
      for (let i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i]).then(resolve, reject);
      }
    } else {
      resolve();
    }
  });
}

//For the purpose of user debugging.
//pass appropiate input in below function call.
promiseRace([Promise.reject(12213), Promise.resolve(1223)])
  .then(console.log)
  .catch(console.error); // → "error!"
