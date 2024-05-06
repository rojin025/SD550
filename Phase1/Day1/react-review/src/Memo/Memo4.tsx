import { useState, memo } from "react";

// Define a single item component
const Item = memo(() => {
  console.log("Rendering Item");
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={toggleChecked} />
      <span>{checked ? "Checked" : "Unchecked"}</span>
    </div>
  );
});

// Parent component rendering a list of items
const Memo4 = () => {
  console.log("Rendering Memo4");
  return (
    <div>
      <h2>List of Items</h2>
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Memo4;
