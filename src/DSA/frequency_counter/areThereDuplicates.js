/* 
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
 */

function areThereDuplicates(...args) {
  const argsMap = {};

  for (let arg of args) {
    if (argsMap[arg]) {
      return true;
    }
    argsMap[arg] = true;
  }
  return false;
}
