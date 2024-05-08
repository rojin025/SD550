import { useNavigate } from "react-router-dom";
import { AuthorI, BookI } from "../../Types/types";
import axios from "axios";
import { BASE_URL } from "./BookList";
import { ChangeEvent, useContext, useState } from "react";
import GlobalContext from "../GlobalContext";

interface props {
  book: BookI;
}

function Book({ book }: props) {
  const navTo = useNavigate();
  const { books, authors, setBooks } = useContext(GlobalContext);
  const [selectedAuthors, setSeletedAuthors] = useState<string[]>(book.authors);

  async function handleDeleteBook() {
    const res = window.confirm("Delete Book?");
    if (res) {
      try {
        const res = await axios.delete(`${BASE_URL}books/${book.id}`);
        if (res.status === 200) {
          alert("Deleted");
          const newData = books.filter((x) => book.id !== x.id);
        }
      } catch (error) {}
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const authorId = e.target.value;
    if (selectedAuthors?.includes(authorId)) {
      const arr = selectedAuthors.filter(
        (currentAuthor) => currentAuthor !== authorId
      );
      setSeletedAuthors(arr);
    } else {
      if (selectedAuthors) {
        const arr = [...selectedAuthors, authorId];
        setSeletedAuthors(arr);
      } else {
        setSeletedAuthors([authorId]);
      }
    }
  };

  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="30%"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect
            width="100%"
            height="100%"
            fill="#55595c"
            data-darkreader-inline-fill=""
          ></rect>
          <text
            x="35%"
            y="50%"
            fill="#eceeef"
            dy=".3em"
            data-darkreader-inline-fill=""
          >
            {book.title}
          </text>
        </svg>

        <div className="card-body">
          <b>Genre: {book.genre}</b>
          <p className="card-text">
            <i> - "{book.summary}"</i>
          </p>
          {book.catalog && <p>{book.catalog.availableCopies}</p>}
          {authors.map((author: AuthorI) => {
            return (
              <div>
                <input
                  type="checkbox"
                  id={book.title + author.id}
                  value={author.id}
                  onChange={handleChange}
                />
              </div>
            );
          })}
        </div>
        <button
          className="btn btn-lg btn-success"
          onClick={() => navTo(`/editBook`, { state: book })}
        >
          Edit
        </button>
        <button className="btn btn-lg btn-danger" onClick={handleDeleteBook}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Book;
