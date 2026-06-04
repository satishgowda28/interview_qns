/**
 * @param {string} text
 * @param {Array<string>} queries
 * @return {string}
 */
export default function textSearch(text, queries) {
  if (text.trim() === "") {
    return text;
  }
  const boldChars = Array.from({ length: text.length }, () => 0);

  const boldText = new Array(text.length).fill(0);
  for (let query of queries) {
    if (query.trim() === "") continue;
    for (let i = 0; i < text.length; ) {
      const subStr = text.slice(i, i + query.length);
      if (subStr.toLowerCase() === query.toLowerCase()) {
        boldText.fill(1, i, i + query.length);
        i += query.length;
      } else {
        i++;
      }
    }
  }
  let finalChar = "";
  for (let i = 0; i < boldText.length; i++) {
    const shouldOpen = boldText[i] === 1 && boldText[i - 1] !== 1;
    const shouldClose = boldText[i] === 1 && boldText[i + 1] !== 1;
    let char = text[i];
    if (shouldOpen) {
      char = `<b>${char}`;
    }
    if (shouldClose) {
      char = `${char}</b>`;
    }
    finalChar += char;
  }
  return finalChar;
}
