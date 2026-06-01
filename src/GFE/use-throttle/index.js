/**
 * @template T
 * @param {T} value
 * @param {number} interval
 */
import { useEffect, useRef, useState } from "react";
export default function useThrottle(value, interval = 500) {
  const [tValue, setTvalue] = useState(value);
  const lastUpdated = useRef(0);

  useEffect(() => {
    const now = Date.now();
    const timeElapse = now - lastUpdated.current;
    if (timeElapse >= interval) {
      lastUpdated.current = now;
      setTvalue(value);
    } else {
      const timeReamining = interval - timeElapse;
      const id = setTimeout(() => {
        lastUpdated.current = Date.now();
        setTvalue(value);
      }, timeReamining);
      return () => {
        clearTimeout(id);
      };
    }
  }, [value, interval]);

  return tValue;
}
