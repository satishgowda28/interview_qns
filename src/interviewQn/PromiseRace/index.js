function promiseRace(promises) {
  // Your implementation

  return new Promise((resolve, reject) => {
    if (!promises || promises.length === 0) {
      return;
    }
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(resolve, reject);
    }
  });
}

//For the purpose of user debugging.
//pass appropiate input in below function call.
promiseRace([]).then(console.log).catch(console.error); // → "error!"
