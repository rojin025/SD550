import { Author } from "../../Types/types";

interface props {
  author: Author;
}

function AuthorTemplate({ author }: props) {
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
            {author.firstname} {author.lastname}
          </text>
        </svg>

        <div className="card-body">
          <b>Email: {author.email}</b>
          <p className="card-text">
            <i> {author.id}</i>
            <br />
            <i> "{author.address}"</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthorTemplate;
