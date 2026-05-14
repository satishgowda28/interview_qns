const doc = new DOMParser().parseFromString(
  `<div>
    <span style="font-size: 12px">Span</span>
    <p style="font-size: 12px">Paragraph</p>
    <blockquote style="font-size: 14px">Blockquote</blockquote>
  </div>`,
  "text/html",
);

function createElementFromHtmlString(htmlString) {
  // Use `document.createElement()` because jsdom@16 has some issues with `getComputedStyle()`
  // with elements created using `DOMParser().parseFromString()`.
  const div = document.createElement("div");
  div.innerHTML = htmlString.trim(); // Trimming to avoid any leading whitespace nodes.
  return div;
}

function getElementsByStyle(domElem, style, value) {
  let elems = [];
  function loopElem(el) {
    const stVal = getComputedStyle(el).getPropertyValue(style);
    if (stVal === value) elems.push(el.localName);
    if (el.children.length) {
      [...el.children].forEach((e) => {
        loopElem(e);
      });
    }
  }
  for (let ch of domElem.children) {
    loopElem(ch);
  }
  return elems;
}
getElementsByStyle(doc.body, "font-size", "12px");

const containerEl = createElementFromHtmlString(
  `<div id="root" style="color: rgb(255, 255, 255)">
    <span class="match" style="color: rgb(255, 255, 255)">
      <!-- Here's a comment -->
      Span
      <span class="match" style="color: rgb(255, 255, 255)">Span</span>
    </span>
    <p>Paragraph</p>
    <div>
      <span class="match" style="color: rgb(255, 255, 255)">Span</span>
    </div>
  </div>`,
);

const els = getElementsByStyle(
  containerEl.querySelector("#root"),
  "color",
  "rgb(255, 255, 255)",
);

els;
