import { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("Hello!");

  console.log("Rendering -> My Component!");

  useEffect(() => {
    console.log("Mounting UseEffect!");
    return () => console.log("Unmounting UseEffect!");
  }, []);

  useEffect(() => {
    console.log("Rendering -> Mounting UseEffect!");
    return () => console.log("Rendering -> Unmounting UseEffect!");
  }, []);

  useEffect(() => {
    console.log("Count is change!");
    return () => console.log("Return -> Count is change");
  }, [count]);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleMsg = () => {
    setMsg(msg + "Hello!");
  };

  return (
    <>
      <p>My Component</p>
      <button onClick={handleIncrease}>Count</button>
      <button onClick={handleMsg}>Msg</button>
    </>
  );
}
