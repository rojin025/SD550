import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    // Focus the input field when the button is clicked
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div>
      <h1>Focus Input Example</h1>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
