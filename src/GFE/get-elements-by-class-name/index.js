function elemHasClass(elem, classNames) {
  return [...classNames].every((name) => elem.classList.contains(name));
}
export default function getElementsByClassName(element, classNames) {
  let result = [];
  classNames = new Set(classNames.trim().split(/\s+/g));
  function loop(childElem) {
    if (elemHasClass(childElem, classNames)) {
      result.push(childElem);
    }
    for (let elem of childElem.children) {
      loop(elem);
    }
  }
  for (let elem of element.children) {
    loop(elem);
  }
  return result;
}

const doc = new DOMParser().parseFromString(
  `<div class="foo bar  foo  baz">
  <span class="   bar baz  bar">Span</span>
  <p class="  foo baz  baz ">Paragraph</p>
  <div class=" foo bar   bar  bar  "></div>
</div>`,
  "text/html",
);
getElementsByClassName(doc.body, "  foo   foo bar ");
