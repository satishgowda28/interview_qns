/**
 * @param {string} text
 * @param {string} query
 * @return {string}
 */
export default function textSearch(text, query) {
  if (text.trim() === "" || query.trim() === "") {
    return text;
  }

  const textArrary = new Array(text.length).fill(0);
  for (let i = 0; i < textArrary.length; ) {
    const txtSubstr = text.slice(i, i + query.length);
    if (txtSubstr.toLowerCase() === query.toLowerCase()) {
      textArrary.fill(1, i, i + query.length);
      i += query.length;
    } else {
      i++;
    }
  }
  let boldedTxt = "";
  for (let i = 0; i < textArrary.length; i++) {
    const shouldOpen = textArrary[i] === 1 && textArrary[i - 1] !== 1; //
    const shouldClose = textArrary[i] === 1 && textArrary[i + 1] !== 1; //
    if (shouldOpen) {
      boldedTxt += `<b>${text[i]}`;
      continue;
    }
    if (shouldClose) {
      boldedTxt += `${text[i]}</b>`;
      continue;
    }
    boldedTxt += text[i];
  }
  return boldedTxt;
}
