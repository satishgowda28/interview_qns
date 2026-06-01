/**
 * @param {Array<Element>} elements
 * @return {Element}
 */
export default function lowestHidingElement(elements) {
  let lowest = elements[0];
  for (let i = 1; i < elements.length; i++) {
    const elem = elements[i];
    while (!lowest.contains(elem)) {
      lowest = lowest.parentElement;
    }
  }
  return lowest;
}

const page = new DOMParser().parseFromString(
  `
    <main>
      <nav>
        <ul>
          <li><a href="/docs">Docs</a></li>
          <li><a href="/api">API</a></li>
        </ul>
      </nav>
    </main>
  `,
  "text/html",
);

const list = page.body.firstElementChild.firstElementChild.firstElementChild;
const firstLink = list.firstElementChild.firstElementChild;

lowestHidingElement([list, firstLink]);
