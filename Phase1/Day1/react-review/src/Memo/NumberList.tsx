import React, { useState, useMemo } from "react";

// Parent component rendering a list of numbers
const NumberList = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5]);
  const [randomValue, setRandomValue] = useState<number>(0);

  // Compute the sum of numbers and memoize the result
  const sum = useMemo(() => {
    console.log("Computing sum");
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]);

  const addRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setNumbers([...numbers, randomNumber]);
  };

  const updateRandomValue = () => {
    console.log(randomValue);
    setRandomValue(Math.random());
  };

  return (
    <div>
      <h2>List of Numbers</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <p>Sum of Numbers: {sum}</p>
      <button onClick={addRandomNumber}>Add Random Number</button>
      <button onClick={updateRandomValue}>Update Random Value</button>
    </div>
  );
};

export default NumberList;
