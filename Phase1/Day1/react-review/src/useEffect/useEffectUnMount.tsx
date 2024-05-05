import { useEffect, useState } from "react";

function MyComponent() {
  useEffect(() => {
    console.log("My Component!");
    console.log("Mounting UseEffect!");
    return () => {
      // this return CB will only render when MyComponent is unMounted.
      console.log("Unmounting UseEffect!---------------");
    };
  }, []);

  return (
    <>
      <p>My Component</p>
    </>
  );
}

export default function UseEffectUnMount() {
  const [show, setShow] = useState(true);

  return (
    <>
      <p>Mouting vs Unmounting</p>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <MyComponent />}
    </>
  );
}
