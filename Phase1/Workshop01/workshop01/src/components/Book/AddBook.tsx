import { ChangeEvent, FormEvent, useMemo, useState } from "react";

import axios from "axios";
import { Book } from "../../Types/types";

const BASE_URL = "http://localhost:9000/";

interface props {
  onSetNewBook: (book: Book) => void;
}

function AddBook({ onSetNewBook }: props) {
  const initialBook = {
    id: "",
    title: "",
    genre: "",
    format: "",
    summary: "",
    isbn: "",
  };
  const [book, setBook] = useState(initialBook);
  const [isAdd, setIsAdd] = useState(false);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  }

  async function addNewBook() {
    const { title, genre, format, summary } = book;
    if (!title || !genre || !format || !summary) {
      console.log("Input required.");
      return;
    }
    try {
      console.log("Adding Book", book);
      const res = await axios.post(`${BASE_URL}books`, {
        book,
      });
      console.log(res.statusText);
      onSetNewBook(book);
      if (res.status !== 201) {
        throw new Error("Error adding a book.");
      }
      console.log("Cleanina");
      setBook({ ...initialBook });
    } catch (e) {
      console.log("Error Updating Book: ", e);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await addNewBook();
  }

  const BookForm = useMemo(() => {
    return (
      <div className="container">
        <h1>Edit Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-floating">
            <input
              type="text"
              placeholder="id"
              className="form-control"
              id="floatingInput"
              name="id"
              value={book.id}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-floating">
            <input
              type="text"
              placeholder="title:"
              className="form-control"
              id="floatingInput"
              name="title"
              value={book.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-floating">
            <input
              type="text"
              placeholder="genre:"
              className="form-control"
              id="floatingInput"
              name="genre"
              value={book.genre}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-floating">
            <input
              type="text"
              placeholder="isbn:"
              className="form-control"
              id="floatingInput"
              name="isbn"
              value={book.isbn}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-floating">
            <input
              type="text"
              placeholder="format:"
              className="form-control"
              id="floatingInput"
              name="format"
              value={book.format}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-floating">
            <input
              type="text"
              placeholder="summary:"
              className="form-control"
              id="floatingInput"
              name="summary"
              value={book.summary}
              onChange={handleInputChange}
            />
          </div>

          <button className="w-100 btn btn-lg btn-success">
            Add - {book.title}
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2024</p>
        </form>
      </div>
    );
  }, [book]);

  return (
    <>
      <div>
        <button onClick={() => setIsAdd(!isAdd)}>Add book</button>
        {isAdd && BookForm}
      </div>
    </>
  );
}

export default AddBook;
