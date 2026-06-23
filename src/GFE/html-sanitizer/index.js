const REMOVE_TAGS = new Set(["script", "iframe", "object", "embed"]);
const REMOVE_ATTR = new Set(["href", "src"]);
/**
 * @param {string} link
 * @return {boolean}
 */
function isDangerousLink(link) {
  return link.trim().toLowerCase().startsWith("javascript:");
}
/**
 * @param {HTMLElement} element
 */
function stripDrangerousAttr(element) {
  for (const attr of [...element.attributes]) {
    const attrName = attr.name.toLowerCase();
    if (attrName.startsWith("on")) {
      element.removeAttribute(attrName);
      continue;
    }
    if (REMOVE_ATTR.has(attrName) && isDangerousLink(attr.value)) {
      element.removeAttribute(attrName);
      continue;
    }
  }
}
/**
 * @param {HTMLElement} parent
 */
function sanitizeNode(parent) {
  let currentNode = parent.firstChild;

  while (currentNode != null) {
    // Snapshot the next sibling before mutating the current node so traversal
    // still advances correctly after removals.
    const nextSibling = currentNode.nextSibling;

    if (currentNode.nodeType === Node.COMMENT_NODE) {
      currentNode.remove();
      currentNode = nextSibling;
      continue;
    }

    if (currentNode.nodeType === Node.ELEMENT_NODE) {
      const tagName = currentNode.tagName.toLowerCase();

      if (REMOVE_TAGS.has(tagName)) {
        currentNode.remove();
        currentNode = nextSibling;
        continue;
      }

      stripDrangerousAttr(currentNode);
      sanitizeNode(currentNode);
    }

    currentNode = nextSibling;
  }
}

function sanitizeHTML(input) {
  const template = document.createElement("template");
  template.innerHTML = input;

  sanitizeNode(template.content);

  return template.innerHTML;
}

sanitizeHTML(`
  <div>
    <!-- secret -->
    <a href=" javascript:alert(1) " onclick="evil()">Click me</a>
    <script>alert(1)</script>
  </div>
`); //
