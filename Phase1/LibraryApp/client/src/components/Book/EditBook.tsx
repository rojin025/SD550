import { ChangeEvent, FormEvent, useContext, useMemo, useState } from "react";

import axios from "axios";
import { useLocation } from "react-router-dom";
import GlobalContext from "../GlobalContext";

const BASE_URL = "http://localhost:9000/";

function EditBook() {
  const { books, authors } = useContext(GlobalContext);
  const location = useLocation();
  const [book, setBook] = useState(location.state);
  console.log("BookID: ", book);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  }

  function handleCatalogChange(e: any) {
    const { name, value } = e.target;
    let catalog = { ...book.catalog, [name]: value };
    setBook({ ...book, catalog });
  }

  async function updateBook() {
    const { title, genre, format, summary } = book;
    if (!title || !genre || !format || !summary) {
      console.log("Input required.");
      return;
    }
    try {
      console.log("Adding Book", book);
      const res = await axios.put(`${BASE_URL}books/${book.id}`, book);
      if (res.status === 200) {
        const index = books.findIndex((newBook) => newBook.id === book.id);
        // workonit
      }
      if (res.status !== 201) {
        throw new Error("Error adding a book.");
      }
      setBook(book);

      // setBook({ ...initialBook });
    } catch (e) {
      console.log("Error Updating Book: ", e);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await updateBook();
  }

  const BookForm = useMemo(() => {
    return (
      <div className="container">
        <h1>Edit Book</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="id">id</label>

            <input
              type="text"
              placeholder="id"
              className="form-control"
              id="id"
              name="id"
              value={book.id}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="title">title</label>
            <input
              type="text"
              placeholder="title:"
              className="form-control"
              id="title"
              name="title"
              value={book.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
            <h6>Authors:</h6>
            <label htmlFor={book.authors}>{book.authors}</label>
            <input
              id={book.authors}
              type="checkbox"
              name="authors"
              value={book.authors}
              checked
            />
          </div>
          <div>
            <h6>Publisher:</h6>
            <label htmlFor={book.publisher}>{book.publisher}</label>
            <input
              id={book.publisher}
              type="radio"
              name="radio"
              value={book.publisher}
              checked
            />
          </div>
          <div>
            <h6>Catalog:</h6>
            <label htmlFor="numberOfCopies">Number of Copies:</label>
            <input
              id="numberOfCopies"
              type="text"
              name="radio"
              value={book.catalog.numberOfCopies}
              onChange={handleCatalogChange}
            />
            <label htmlFor="availableCopies">Available Copies:</label>
            <input
              id="availableCopies"
              type="text"
              name="radio"
              value={book.catalog.availableCopies}
              onChange={handleCatalogChange}
            />
          </div>

          <button className="w-100 btn btn-lg btn-success">
            Edit - {book.title}
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2024</p>
        </form>
      </div>
    );
  }, [book]);

  return (
    <>
      <div>{BookForm}</div>
    </>
  );
}

export default EditBook;
