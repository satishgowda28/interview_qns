export default class MapWithHistory {
  constructor() {
    this.store = new Map();
  }

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @returns {void}
   */
  set(key, value, timestamp) {
    const getKeyValue = this.store.get(key);
    if (getKeyValue) {
      getKeyValue.push({ timestamp, value });
    } else {
      this.store.set(key, [{ timestamp, value }]);
    }
  }

  /**
   * @param {string} key
   * @param {number} timestamp
   * @returns {string}
   */
  get(key, timestamp) {
    const keyValue = this.store.get(key);
    if (!keyValue) {
      return "";
    }
    for (let i = keyValue.length - 1; i >= 0; i--) {
      const { value, timestamp: ts } = keyValue[i];
      if (timestamp >= ts) {
        return value;
      }
    }
    return "";
  }
}

const mapWithHistory = new MapWithHistory();

mapWithHistory.set("language", "JavaScript", 1);
mapWithHistory.set("language", "TypeScript", 4);
mapWithHistory;
mapWithHistory.get("language", 1);
mapWithHistory.get("language", 3);
// 'JavaScript'

mapWithHistory.get("language", 4);
// 'TypeScript'

mapWithHistory.get("language", 10);
