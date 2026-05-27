export default class LocalStorageWithExpiry {
  /**
   * @param {string} key
   * @returns {string | null}
   */
  getItem(key) {
    const data = localStorage.getItem(key);
    if (!data) {
      return null;
    }
    const { value, expireOn } = JSON.parse(data);
    if (!expireOn || expireOn > Date.now()) {
      return value;
    }
    localStorage.removeItem(key);
    return null;
  }

  /**
   * @param {string} key
   * @param {string} value
   * @param {{ ttl?: number, expiresAt?: number | Date }} [options]
   * @returns {void}
   */
  setItem(key, value, options = {}) {
    if (options?.expiresAt && options?.ttl) {
      throw new TypeError("Both options are set");
    }
    let expireOn;
    if (options?.ttl) {
      expireOn = Date.now() + options.ttl;
    }
    if (options?.expiresAt) {
      expireOn = new Date(options.expiresAt).getTime();
    }
    localStorage.setItem(key, JSON.stringify({ value, expireOn }));
  }
}

const storage = new LocalStorageWithExpiry();
storage.setItem("theme", "dark");
storage.getItem("theme");
