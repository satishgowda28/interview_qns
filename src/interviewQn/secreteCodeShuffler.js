function getCharCode(str = "") {
  return str.charCodeAt(0);
}

function getStrFromNumber(num = 0) {
  return String.fromCharCode(num);
}

function decodeSecretCode(s) {
  let finalStr = "";
  if (s.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < s.length; i += 2) {
    const [a, n] = s.slice(i, i + 2).split("");
    if (!/[a-z]/g.test(a) || isNaN(n)) {
      return false;
    }
    finalStr += `${getStrFromNumber(getCharCode(a) + +n)}`;
  }

  return finalStr;
}

decodeSecretCode("x1y2z3");
