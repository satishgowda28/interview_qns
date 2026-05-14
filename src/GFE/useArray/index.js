import { useEffect } from "react";

function useArray(initValue) {
  const [array, setArray] = useState(() => initValue);

  useEffect(() => {
    setArray(initValue);
  }, initValue);
  const push = (item) => {
    setArray((prev) => [...prev, item]);
  };
  const remove = (idx) => {
    setArray((prev) => {
      return prev.filter((_, i) => i !== idx);
    });
  };
  const filter = (func) => {
    setArray((prev) => {
      return prev.filter(func);
    });
  };
  const update = (item, idx) => {
    setArray((prev) => {
      return prev.map((val, i) => (i === idx ? item : val));
    });
  };
  const clear = () => {
    setArray([]);
  };
  return { array, set: setArray, remove, filter, update, push, clear };
}
