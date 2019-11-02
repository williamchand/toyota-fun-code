import { useState, useCallback } from "react";

export default initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleValue = useCallback( value => {
    setValue(value);
  },[]);
  return [value, handleValue];
};