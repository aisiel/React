import { useEffect, useState } from "react";

export const Box = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrementCount = () => {
    setCount(count + 1);
  };
  const handleIncrementCount2 = () => {
    setCount2(count2 + 1);
  };
  const callback = () => {
    console.log("useEffect");
  };

  useEffect(callback, [count2]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrementCount}>Increment 1</button>
      <button onClick={handleIncrementCount2}>Increment 2</button>
    </div>
  );
};
