// no matter what i will call a single async function
// my approach is wrong and its OK
async function scheduleTasks(tasks = [], maxConcurrent = 1) {
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
}

window.scheduleTasks = scheduleTasks;
