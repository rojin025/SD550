import { createContext, useEffect, useState } from "react";
import { Author, Book } from "./Types/types";
import Books from "./components/Book/Books";
import axios from "axios";

import AddBook from "./components/Book/AddBook";
import AddAuthor from "./components/Author/AddAuthor";
import Authors from "./components/Author/Authors";
import Header from "./components/Header";
import AddAuthorToBook from "./components/Author/AddAuthorToBook";

export const BASE_URL = "http://localhost:9000/";

interface AppContextType {
  books: Book[];
  authors: Author[];
}

const initialContext = {
  books: [],
  authors: [],
};

export const AppContext = createContext<AppContextType>(initialContext);

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [newBook, setNewBook] = useState({
    id: "",
    title: "",
    genre: "",
    format: "",
    summary: "",
    isbn: "",
  });

  useEffect(() => {
    getAllBooks();
    getAllAuthors();
  }, []);

  async function getAllBooks() {
    try {
      const data = await getBooks();
      console.log("Data Base:   ", data);
      setBooks(data);
    } catch (e) {
      console.log("Error getting data: ", e);
    }
  }

  async function getAllAuthors() {
    try {
      const data = await getAuthors();
      console.log("Data Base:   ", data);
      setAuthors(data);
    } catch (e) {
      console.log("Error getting data: ", e);
    }
  }

  async function getBooks() {
    const res = await axios.get(`${BASE_URL}books`);
    console.log(res);
    return res.data;
  }

  async function getAuthors() {
    const res = await axios.get(`${BASE_URL}authors`);
    console.log(res);
    return res.data;
  }

  const handleAddBook = (newBook: Book) => {
    setBooks([...books, newBook]);
  };

  return (
    <AppContext.Provider value={{ books, authors }}>
      <div className="App">
        <Header />
        <AddBook onSetNewBook={handleAddBook} />
        <AddAuthorToBook />
        <Books />
        <AddAuthor />
        <Authors />
      </div>
    </AppContext.Provider>
  );
}

export default App;
