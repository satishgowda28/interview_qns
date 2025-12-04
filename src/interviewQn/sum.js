function sum(...args) {
  // Your implementation
  return args.reduce((prev, curr) => {
    return prev + curr;
  });
}

sum(100, 200, 300, 400);
