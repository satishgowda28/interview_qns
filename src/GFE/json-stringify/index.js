/**
 * @param {*} value
 * @return {string}
 */
export default function jsonStringify(value) {
  if (Array.isArray(value)) {
    const mapValue = value.map((val) => jsonStringify(val));
    return `[${mapValue.join(",")}]`;
  }
  if (typeof value === "object" && value !== null) {
    const objKeyVal = Object.entries(value).map(([key, val]) => {
      return `"${key}":${jsonStringify(val)}`;
    });
    return `{${objKeyVal.join(",")}}`;
  }

  if (typeof value === "string") {
    return `"${value}"`;
  }
  return String(value);
}

jsonStringify({ foo: "bar", bar: [1, 2, 3] });
