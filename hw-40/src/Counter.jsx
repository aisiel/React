import { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);

  const handleButtonIncrement = () => {
    setValue(value + 1);
  };
  const handleButtonDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <h1>Counter: {value}</h1>
      <button onClick={handleButtonDecrement}>-1</button>
      <button onClick={handleButtonIncrement}>+1</button>
    </div>
  );
};
