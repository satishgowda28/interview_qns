function getA2Z() {
  let start = "A".charCodeAt(0);
  const end = "Z".charCodeAt(0);
  const alpha = [];
  while (start <= end) {
    alpha.push(String.fromCharCode(start));
    start++;
  }
  return alpha;
}
