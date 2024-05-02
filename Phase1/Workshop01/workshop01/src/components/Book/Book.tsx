import { Book } from "../../Types/types";

interface props {
  book: Book;
  onClick: () => void;
}

function BookTemplates({ book }: props) {
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
      </div>
    </div>
  );
}

export default BookTemplates;

<div className="card-body">
  <p className="card-text">
    This is a wider card with supporting text below as a natural lead-in to
    additional content. This content is a little bit longer.
  </p>
  <div className="d-flex justify-content-between align-items-center">
    <div className="btn-group">
      <button type="button" className="btn btn-sm btn-outline-secondary">
        View
      </button>
      <button type="button" className="btn btn-sm btn-outline-secondary">
        Edit
      </button>
    </div>
    <small className="text-muted">9 mins</small>
  </div>
</div>;
