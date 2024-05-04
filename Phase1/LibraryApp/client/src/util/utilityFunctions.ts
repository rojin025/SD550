import { ChangeEvent, useState } from "react";

const [newBook, setNewBook] = useState({
  title: "",
  genre: "",
  format: "",
  summary: "",
});

export function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
  const { name, value } = e.target;
  setNewBook({
    ...newBook,
    [name]: value,
  });
}
