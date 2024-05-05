import { useEffect, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  console.log("************ My Component! ************");

  useEffect(() => {
    console.log("_________ UseEffect! _________");
    return () => {
      // this return CB will only render when MyComponent is unMounted.
      console.log("Unmounting -> UseEffect!");
    };
  }, []);

  useEffect(() => {
    console.log("============= Mouting Count! =============");
    return () => {
      console.log("Unmounting -> Count");
    };
  }, [count]);

  const handleIncrease = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <p>My Component</p>
      <button onClick={handleIncrease}>Count</button>
    </>
  );
}

export default function UseEffectUnMountDep() {
  const [show, setShow] = useState(true);

  return (
    <>
      <p>Mouting vs Unmounting</p>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <MyComponent />}
    </>
  );
}

function MyComponent2() {
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
