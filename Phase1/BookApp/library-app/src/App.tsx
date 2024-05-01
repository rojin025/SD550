import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Book } from "./Types/types";
import Books from "./Books";
import axios from "axios";
import Input from "./Input";
import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";

const BASE_URL = "http://localhost:9000/";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState({
    title: "",
    genre: "",
    format: "",
    summary: "",
  });

  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    getAllBooks();
  }, []);

  async function getAllBooks() {
    try {
      const data = await getBooks();
      console.log("Data Base:   ", data);
      setBooks(data);
      console.log(setBooks);
    } catch (e) {
      console.log("Error getting data: ", e);
    }
  }

  async function getBooks() {
    const res = await axios.get(`${BASE_URL}books`);
    console.log(res);
    return res.data;
  }

  async function addBook() {
    const { title, genre, format, summary } = newBook;
    const res = await axios.post(`${BASE_URL}books`, {
      id: `${books.length + 1}`,
      title,
      genre,
      isbn: "329-01414395234",
      format,
      summary,
    });
    console.log(res.statusText);
    console.log(res);
    return res.data;
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Submit CLicked!");

    const { title, genre, format, summary } = newBook;
    if (!title || !genre || !format || !summary) {
      console.log("Input required.");
      return;
    }

    try {
      const res = await addBook();
      console.log(res.statusText);
      const newData = res.data;
      console.log(newData);

      setBooks([...books, newData]);
    } catch (e) {
      console.log("Error adding book: ", e);
    }
  }

  function AddBookForm() {
    return (
      <>
        <form onSubmit={handleSubmit} className="container">
          <Input
            name="title"
            value={`${newBook.title}`}
            onChange={handleInputChange}
          />

          <Input
            name="genre"
            value={`${newBook.genre}`}
            onChange={handleInputChange}
          />

          <Input
            name="format"
            value={`${newBook.format}`}
            onChange={handleInputChange}
          />

          <Input
            name="summary"
            value={`${newBook.summary}`}
            onChange={handleInputChange}
          />

          <button className="w-10 btn btn-lg btn-success">Submit</button>
        </form>
      </>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Library</h1>
      </header>

      <div>
        <button onClick={() => setIsAdd(!isAdd)}>Add book</button>
        {isAdd && <AddBookForm />}
      </div>

      <div>
        <button onClick={() => setIsEdit(!isEdit)}>Edit book</button>
        {isEdit && <EditBook />}
      </div>

      <div>
        <button onClick={() => setIsDelete(!isDelete)}>Delete book</button>
        {isDelete && <DeleteBook />}
      </div>
      <hr />

      <Books books={books} />
    </div>
  );
}

export default App;
