/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((val) => deepClone(value));
  }
  return Object.fromEntries(
    Object.entries(value).map(([key, val]) => [key, deepClone(val)]),
  );
}
