import { memo, useMemo, useState } from "react";

function Body() {
  const [count, setCount] = useState(0);
  console.log("Rendering Body");

  return (
    <div>
      <h2>Body</h2>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}
function Footer() {
  console.log("Rendering Footer");

  return <>Footer</>;
}

function Memo() {
  const [msg, setMsg] = useState("Hello ");

  const Header = useMemo(function RawHeader() {
    console.log("Rendering Head");
    return 1;
  }, []);

  return (
    <div>
      <h1>MEMO {Header}</h1>
      <h3>MSG: {msg}</h3>
      <button onClick={() => setMsg((m) => m + "Word. ")}>msg</button>
      <Body />
      <Footer />
    </div>
  );
}

export default Memo;
