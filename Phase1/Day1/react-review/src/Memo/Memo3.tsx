import { useState, memo } from "react";

// Parent component
function Memo3() {
  const [msg, setMsg] = useState("Hello");
  console.log("---------- Memo. ----------");

  return (
    <div>
      <MemoizedCounter />
      {/* <Counter /> */}
      <div>{msg}</div>
      <button
        onClick={() => {
          setMsg((m) => m + "!!!");
        }}
      >
        Words
      </button>
    </div>
  );
}

export default Memo3;

// Simple functional component for counter
function Counter() {
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
}
// Wrap with React.memo to memoize
const MemoizedCounter = memo(Counter);
