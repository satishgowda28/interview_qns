# Create Task Scheduler With Dependencies

1 Each task has a **unique ID** and can have **zero or more dependencies**
2 A task **cannot execute until all its dependencies have been completed**
3 The scheduler should **detect circular dependencies** and prevent execution in such cases.
4 The order of execution should follow **topological sorting** of the dependency graph.

## Example Inputs & Outputs

```js
const scheduler = new TaskSchedulerWithDependency();
scheduler.addTask("A", ["B", "C"]);
scheduler.addTask("B", ["D"]);
scheduler.addTask("C", []);
scheduler.addTask("D", []);
```

## Constraints & Edge Cases

- **Tasks are represented as unique strings**.
- **Dependencies are also valid task IDs**.
- **Each task should be executed only once**.
- **Circular dependencies should be detected and prevented**.
- **If a task has no dependencies, it should execute immediately**
- **Tasks with independent execution orders can have multiple valid outputs**
