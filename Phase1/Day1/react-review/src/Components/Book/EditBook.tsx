import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditBook() {
  const [book] = useState("JavaScript Book");
  const navTo = useNavigate();

  return (
    <div>
      <h2>Edit Book</h2>
      <p>This is the Edit Book page.</p>
      <button onClick={() => navTo("/book", { state: book })}>Book</button>
    </div>
  );
}

export default EditBook;
