/**
 * @param {string} initialValue
 */
import { useRef, useState } from "react";
export default function useInputControl(initialValue) {
  const [value, setValue] = useState(initialValue);
  const prevValue = useRef(initialValue);
  const [dirty, setDirty] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setDirty(true);
  };
  const handleBlur = () => {
    setTouched(true);
  };
  const reset = () => {
    setValue(initialValue);
    setDirty(false);
    setTouched(false);
  };

  return {
    value,
    dirty,
    touched,
    different: value !== prevValue.current,
    handleChange,
    handleBlur,
    reset,
  };
}
