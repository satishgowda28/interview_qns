const TEMPLATE_REGEX = /{{\s*([^{}]+?)\s*}}/g;

/**
 * @typedef {null | undefined | boolean | number | string} TemplateValue
 * @typedef {Record<string, TemplateValue>} TemplateData
 */

/**
 * @param {string} template
 * @param {TemplateData} data
 * @return {string}
 */
export default function renderTemplate(template, data) {
  return template.replace(TEMPLATE_REGEX, (_, key) => {
    if (!Object.hasOwn(data, key)) {
      return "";
    }
    const val = data[key];
    return val === null ? "" : String(val);
  });
}

renderTemplate("Hello {{name}}!", { name: "Alice" });

let x = "Hello {{name}}!".replace(TEMPLATE_REGEX, (_, key) => {
  console.log(key);
  console.log("=-=-=");
  return "---0";
});
x;
