function listFormat(items = [], options = {}) {
  let cleaned = items.filter(Boolean);
  if (cleaned.length === 0) {
    return "";
  }
  if (options.unique) {
    cleaned = [...new Set(cleaned)];
  }
  if (options.sorted) {
    cleaned.sort();
  }
  if (cleaned.length === 1) {
    return cleaned.join("");
  }

  if (
    Number.isInteger(options.length) &&
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
