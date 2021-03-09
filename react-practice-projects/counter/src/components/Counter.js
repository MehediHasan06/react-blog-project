import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count+1);
  };
  const handleReset = () => {
    setCount(count);
  }

  return (
    <>
      <h2>Counter: {count}</h2>
      <button type="submit" onClick={handleIncrease}>
        Increase
      </button>      
      <button type="submit" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default Counter;
