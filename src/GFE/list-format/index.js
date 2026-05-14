function listFormat(items = [], options = {}) {
  let cleaned = items.filter(Boolean);
  if (cleaned.length === 0) {
    return "";
  }
  if (cleaned.length === 1) {
    return items.join("");
  }
  if (options.unique) {
    cleaned = [...new Set(cleaned)];
  }
  if (options.sorted) {
    cleaned.sort();
  }

  if (
    options.length &&
    typeof options.length === "number" &&
    !Number.isNaN(options.length) &&
    Number.isFinite(options.length) &&
    options.length > 0 &&
    options.length < cleaned.length
  ) {
    const remain = cleaned.length - options.length;
    return `${cleaned.slice(0, options.length).join(", ")} and ${remain === 1 ? `${remain} other` : `${remain} others`}`;
  } else {
    return `${cleaned.slice(0, cleaned.length - 1).join(", ")} and ${cleaned.slice(-1)}`;
  }
}

listFormat(["Bob", "Ben", "Tim", "Jane", "John"], { length: 3 });
