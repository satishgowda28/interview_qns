// no matter what i will call a single async function
// my approach is wrong and its OK
/* async function scheduleTasks(tasks = [], maxConcurrent = 1) {
  const concurrentTask = tasks.splice(0, maxConcurrent);
  const arry = [];
  while (concurrentTask.length > 0) {
    try {
      const task = concurrentTask.shift();
      const response = await task();
      arry.push(response);
    } catch (err) {
      arry.push(`${err} ${task.name}`);
    } finally {
      if (tasks.length > 0) {
        const newTask = tasks.shift();
        concurrentTask.push(newTask);
      }
    }
  }
  console.log(arry);
  return arry;
  // implement here
} */

function scheduleTasks(tasks = [], maxConcurrent = 1) {
  let totalTasks = 0;
  let currentCount = 0;
  const resultArray = new Array(tasks.length);
  return new Promise((resolve, reject) => {
    const runNext = function () {
      if (totalTasks === resultArray.length && currentCount === 0) {
        console.log(resultArray);
        resolve(resultArray);
        return;
      }
      while (currentCount < maxConcurrent && tasks.length !== 0) {
        const task = tasks.shift();
        const idx = totalTasks;
        totalTasks++;
        currentCount++;
        task()
          .then((value) => {
            resultArray[idx] = value;
            console.log(idx, value, resultArray);
          })
          .catch((err) => {
            console.log("=-=", err);
            reject(err);
          })
          .finally(() => {
            currentCount--;
            runNext();
          });
      }
    };
    runNext();
  });
}

window.scheduleTasks = scheduleTasks;
