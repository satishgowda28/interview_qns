/*
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
 */

function pow(base, expo) {
  if (expo === 0) {
    return 1;
  }
  if (expo === 1) {
    return base;
  }
  return base * pow(base, expo - 1);
}
