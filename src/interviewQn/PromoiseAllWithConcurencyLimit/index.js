function promiseAllWithConcurrencyLimit(functions = [], limit = 1) {
  let result = [];
  const totalCount = functions.length;
  return new Promise((resolve, reject) => {
    const runTaks = async () => {
      if (result.length === totalCount) {
        await resolve(result);
        return;
      }
      const tasks = functions.splice(0, limit);
      const promArray = tasks.map((fn) => fn());
      try {
        const values = await Promise.all(promArray);
        result = [...result, ...values];
      } catch (err) {
        reject(err);
      } finally {
        runTaks();
      }
    };
    runTaks();
  });
}

const funcs = [
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve("1");
      }, 1000)
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve("2");
      }, 2000)
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve("3");
      }, 500)
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve("4");
      }, 1500)
    ),
];
window.funcs = funcs;
window.promiseAllWithConcurrencyLimit = promiseAllWithConcurrencyLimit;

// promiseAllWithConcurrencyLimit(funcs, 2).then(console.log).catch(console.error);
