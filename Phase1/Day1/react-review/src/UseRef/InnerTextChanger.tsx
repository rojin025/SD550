import React, { useRef } from "react";

function InnerTextChanger() {
  const textRef = useRef<HTMLParagraphElement>(null);

  const changeText = () => {
    if (textRef.current) {
      textRef.current.innerText += "!!!";
    }
  };

  return (
    <div>
      <h1>Inner Text Changer</h1>
      <p ref={textRef}>Hello World</p>
      <button onClick={changeText}>Change Text</button>
    </div>
  );
}

export default InnerTextChanger;
