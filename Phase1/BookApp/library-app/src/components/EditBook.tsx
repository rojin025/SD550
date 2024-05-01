import { ChangeEvent, FormEvent, useState } from "react";

import { updateBook } from "../apis/services/book.service";
import axios from "axios";

const BASE_URL = "http://localhost:9000/";

function EditBook() {
  const [book, setBook] = useState({
    id: "",
    title: "",
    genre: "",
    format: "",
    summary: "",
    isbn: "",
  });

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  }

  async function updateBook() {
    try {
      const { id, title, genre, format, summary, isbn } = book;
      console.log("Updating Book", book);

      const res = await axios.put(`${BASE_URL}books/${id}`, {
        id: id,
        title: title,
        genre: genre,
        isbn: isbn,
        format: format,
        summary: summary,
      });
    } catch (e) {
      console.log("Error Updating Book: ", e);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Updating Book", book);
    await updateBook();
  }

  return (
    <div className="container">
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input
            type="text"
            placeholder="id:"
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
          Update - {book.title}
        </button>
        <p className="mt-5 mb-3 text-muted">© 2017–2024</p>
      </form>
    </div>
  );
}

export default EditBook;
