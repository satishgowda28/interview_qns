class TaskSchedulerWithDependencies {
  constructor() {
    this.task = new Map();
  }

  addTask(taskId, dependencies = []) {
    if (!this.task.has(taskId)) {
      const taskMeta = {
        depCount: dependencies.length,
        support: new Set(),
      };
      this.task.set(taskId, taskMeta);
    } else {
      const { depCount, support } = this.task.get(taskId);
      this.task.set(taskId, {
        depCount: depCount + dependencies.length,
        support,
      });
    }
    if (dependencies.length) {
      for (let i = 0; i < dependencies.length; i++) {
        const supportTask = dependencies[i];
        if (!this.task.has(supportTask)) {
          const support = new Set([taskId]);
          this.task.set(supportTask, { depCount: 0, support });
        } else {
          const task = this.task.get(supportTask);
          task.support.add(taskId);
        }
      }
    }
  }

  execute() {
    const orderTaskExecuted = [];
    const runTheTasks = () => {
      console.log([...this.task], orderTaskExecuted);
      // get the task with 0 dep
      // search from the last
      let taskWithZeroDep = null;
      for (const [key, value] of this.task) {
        const { depCount } = value;
        if (depCount === 0) {
          taskWithZeroDep = [key, this.task.get(key)];
        }
      }
      if (!taskWithZeroDep) {
        // show error and return
        throw new Error("Error: Circular dependency detected!");
      }

      /* Executing the task */
      const [key, { support }] = taskWithZeroDep;
      orderTaskExecuted.push(key);
      this.task.delete(key);

      /* reducting the dep count */
      for (const dep of support) {
        const t = this.task.get(dep);
        t.depCount -= 1;
      }

      if (this.task.size === 0) {
        console.log("Output:", JSON.stringify(orderTaskExecuted));
        return orderTaskExecuted;
      } else {
        runTheTasks();
      }
    };

    runTheTasks();
  }
}

window.scheduler = new TaskSchedulerWithDependencies();
