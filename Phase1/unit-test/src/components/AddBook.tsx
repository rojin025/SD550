import axios from "axios";
import { title } from "process";
import { useState } from "react";

export default function AddBook() {
  const [book, setBook] = useState({ id: "", title: "" });
  const onChange = (e: any) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const onAdd = async () => {
    try {
      const res = await axios.post("https://localhost:9000/books", book);
    } catch (error) {}
  };

  return (
    <>
      <button data-testid={123123}>Add</button>
    </>
  );
}
