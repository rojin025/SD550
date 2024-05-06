import { useState, memo } from "react";

// Simple functional component for counter
const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("---------- Counter ---------- ");

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// Wrap with React.memo to memoize
const MemoizedCounter = memo(Counter);

// Parent component
const Memo3 = () => {
  const [msg, setMsg] = useState("Hello");
  console.log("---------- Memo. ----------");

  return (
    <div>
      <MemoizedCounter />
      <button
        onClick={() => {
          setMsg((m) => m + " World");
        }}
      >
        Words
      </button>
    </div>
  );
};

export default Memo3;
