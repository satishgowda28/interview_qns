// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
function palindrome(str = "", start = 0, end = str.length - 1) {
  if (start >= end) {
    return true;
  }
  if (str[start] !== str[end]) {
    return false;
  }
  return palindrome(str, start + 1, end - 1);
}
