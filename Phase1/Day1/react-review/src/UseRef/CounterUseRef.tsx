import React, { useState, useRef } from "react";

function CounterUseRef() {
  const [count, setCount] = useState(0);
  // Ref to persist count value across renders
  const countRef = useRef(count);

  const increment = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      // Update countRef.current with the new count value
      countRef.current = newCount;
      return newCount;
    });
  };

  return (
    <div>
      <h1>CounterUseRef</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <p>Count ( from useRef ) : {countRef.current}</p>
    </div>
  );
}

export default CounterUseRef;
