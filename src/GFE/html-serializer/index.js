export default function serializeHTML(element, depth = 0) {
  const indent = "\t".repeat(depth);
  let finalHTML = "";
  if (typeof element === "object") {
    const { tag, children } = element;
    finalHTML += `${indent}<${tag}>\n`;
    if (children.length) {
      for (let child of children) {
        finalHTML += serializeHTML(child, depth + 1);
      }
    }
    finalHTML += `${indent}</${tag}>`;
    if (depth > 0) {
      finalHTML += "\n";
    }
  } else {
    let textNode = `${indent}${element}`;
    if (depth > 0) {
      textNode += "\n";
    }
    return textNode;
  }
  return finalHTML;
}

serializeHTML({
  tag: "body",
  children: [
    { tag: "div", children: [{ tag: "span", children: ["foo", "bar"] }] },
    { tag: "div", children: ["baz"] },
  ],
}); //
//<body>\n\t<div>\n\t\t<span>\n\t\t\tfoo\n\t\t\tbar\n\t\t</span>\n\t</div>\n\t<div>\n\t\tbaz\n\t</div>\n</body>
//<body>\n\t<div>\n\t\t<span>\n\t\t\tfoo\n\t\t\tbar\n\t\t</span>\n\t</div>\n\t<div>\n\t\tbaz\n\t</div>\n</body>\n
