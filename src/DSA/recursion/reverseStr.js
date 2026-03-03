/* Write a recursive function called reverse which accepts a string and returns a new string in reverse. */
function reverse(str = "") {
  if (!str) {
    return "";
  }
  if (str.length === 1) {
    return str;
  }
  return str.slice(-1) + reverse(str.slice(0, -1));
}
