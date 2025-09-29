const sum = (a) => {
  return (b) => {
    if (b) return sum(a + b);
    return a;
  };
};
