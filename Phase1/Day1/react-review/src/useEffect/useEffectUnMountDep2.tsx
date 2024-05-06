import { useEffect, useState } from "react";

export default function UseEffectUnMountDep2() {
  const [show, setShow] = useState(true);

  function MyComponent2() {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState("Hello!");

    console.log("************ Mouting My Component2! ************");

    useEffect(() => {
      console.log("_________ Mouting UseEffect! [] _________");
      return () => {
        // this return CB will only render when MyComponent is unMounted.
        console.log("Unmounting -> UseEffect! [] ");
      };
    }, []);

    useEffect(() => {
      console.log("_________ Mouting UseEffect! No dep _________");
      return () => {
        console.log("Unmounting -> UseEffect! No dep ");
      };
    });

    useEffect(() => {
      console.log("============= Mouting Count! =============");
      return () => {
        console.log("Unmounting -> Count");
      };
    }, [count]);

    useEffect(() => {
      console.log("============= Mouting msg! =============");
      return () => {
        console.log("Unmounting -> msg");
      };
    }, [msg]);

    useEffect(() => {
      console.log("============= Mouting Combo! =============");
      return () => {
        console.log("Unmounting -> Combo");
      };
    }, [msg, count]);

    const handleIncrease = () => {
      console.log("Count Clicked<<<<<<<<<<<<<");
      setCount(count + 1);
    };

    const handleMsg = () => {
      console.log("Msg Clicked<<<<<<<<<<<<<");
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
  return (
    <>
      <p>Mouting vs Unmounting</p>
      <button
        onClick={() => {
          console.log("Show Clicked<<<<<<<<<<<<<");
          setShow(!show);
        }}
      >
        Show
      </button>
      {show && <MyComponent2 />}
    </>
  );
}

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
