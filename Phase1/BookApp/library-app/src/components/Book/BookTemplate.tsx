import { useNavigate } from "react-router-dom";
import { BookI } from "../../Types/types";
import axios from "axios";
import { BASE_URL } from "./BookList";
import { useContext } from "react";
import GlobalContext from "../Context";

interface props {
  book: BookI;
}

function BookTemplate({ book }: props) {
  const navTo = useNavigate();
  const { books } = useContext(GlobalContext);

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

export default BookTemplate;
