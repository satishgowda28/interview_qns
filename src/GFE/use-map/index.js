import { useCallback, useState } from "react";

function useMap(initValue) {
  const [map, setMap] = useState(() => new Map(initValue));

  const set = useCallback((key, value) => {
    setMap((prev) => {
      const tmp = new Map(prev);
      tmp.set(key, value);
      return tmp;
    });
  }, []);
  const setAll = useCallback((entries) => {
    setMap(new Map(entries));
  }, []);
  const remove = useCallback((key) => {
    setMap((prev) => {
      const tmp = new Map(prev);
      tmp.delete(key);
      return tmp;
    });
  }, []);
  const reset = useCallback(() => {
    setMap(new Map());
  }, []);
  return { map, set, setAll, remove, reset };
}
