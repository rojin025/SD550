import { useState, ChangeEvent, memo } from "react";

// Parent component
const Memo2 = () => {
  const [name, setName] = useState<string>("Alice");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <MemoizedNameDisplay name={name} />
    </div>
  );
};

export default Memo2;

// Define props interface
interface props {
  name: string;
}

// Simple functional component with TypeScript
const NameDisplay = ({ name }: props) => {
  console.log("Rendering NameDisplay");
  return <p>Hello, {name}!</p>;
};

// Wrap with React.memo to memoize
const MemoizedNameDisplay = memo(NameDisplay);
