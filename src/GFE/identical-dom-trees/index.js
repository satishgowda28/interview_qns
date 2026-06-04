/**
 * @param {Node} nodeA
 * @param {Node} nodeB
 * @return {boolean}
 */
export default function identicalDOMTrees(nodeA, nodeB) {
  if (nodeA.nodeType !== nodeB.nodeType) {
    return false;
  }
  if (nodeA.nodeType === Node.TEXT_NODE) {
    return nodeA.textContent === nodeB.textContent;
  }
  if (nodeA.tagName !== nodeB.tagName) {
    return false;
  }
  if (nodeA.childNodes.length !== nodeB.childNodes.length) {
    return false;
  }
  if (nodeA.attributes.length !== nodeB.attributes.length) {
    return false;
  }
  const allAttrSame = nodeA
    .getAttributeNames()
    .every((name) => nodeA.getAttribute(name) === nodeB.getAttribute(name));

  if (!allAttrSame) {
    return false;
  }

  return Array.prototype.every.call(nodeA.childNodes, (childA, idx) => {
    return identicalDOMTrees(childA, nodeB.childNodes[idx]);
  });
}

const treeA = new DOMParser().parseFromString(
  `<div><span>Foo</span><p>Para</p></div>`,
  "text/html",
);
const treeB = new DOMParser().parseFromString(
  `<div><span>Bar</span><p>Para</p></div>`,
  "text/html",
);

identicalDOMTrees(treeA.body, treeB.body);
