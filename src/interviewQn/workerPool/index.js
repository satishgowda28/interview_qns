async function task(id, delay) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(`Task ${id} Done`);
    }, delay)
  );
}

class WorkerPool {
  constructor(maxWorkers = 2) {
    this.maxWorker = maxWorkers;
    this.currentWorkerCount = 0;
    this.pendingTasks = [];
    // Your implementation
  }

  run(taskFunction) {
    return new Promise((resolve, reject) => {
      const executeTask = async () => {
        try {
          this.currentWorkerCount++;
          const response = await taskFunction();
          resolve(response);
        } catch (err) {
          reject(err);
        } finally {
          this.currentWorkerCount--;
          if (this.pendingTasks.length > 0) {
            const newTask = this.pendingTasks.shift();
            newTask();
          }
        }
      };
      if (this.currentWorkerCount < this.maxWorker) {
        executeTask();
      } else {
        this.pendingTasks.push(executeTask);
      }
    });
  }
}

window.task = task;
window.pool = new WorkerPool();
