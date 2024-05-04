import { useContext, useEffect, useState } from "react";

import axios from "axios";

import { BookI } from "../../Types/types";
import Books from "./Books";
import GlobalContext from "../GlobalContext";

export const BASE_URL = "http://localhost:9000/";

function BookList() {
  const { books, setBooks } = useContext(GlobalContext);
  const [isAddBook, setIsAddBook] = useState(false);

  const [newBook, setNewBook] = useState({
    id: "",
    title: "",
    genre: "",
    format: "",
    summary: "",
    author: [],
    isbn: "",
  });

  useEffect(() => {
    getAllBooks();
  }, []);

  async function getAllBooks() {
    try {
      const res = await axios.get(`${BASE_URL}books`);
      const data = res.data;

      setBooks(data);
    } catch (e) {
      console.log("Error getting data: ", e);
    }
  }

  const handleAddBook = (newBook: BookI) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="App">
      <Books />
    </div>
  );
}

export default BookList;
