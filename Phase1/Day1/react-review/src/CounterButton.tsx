import { useState } from "react";

interface props {
  increase: number;
}

function CounterButton({ increase }: props) {
  const [counter, setCounter] = useState(0);

  function handleOne() {
    setCounter((counter) => counter + increase);
  }

  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button onClick={handleOne}>+{increase}</button>
    </div>
  );
}

export default CounterButton;
