import { useContext } from "react";
import AuthorTemplate from "./Author";
import GlobalContext from "../GlobalContext";
// import { AppContext } from "../../App";

function Authors() {
  const { authors } = useContext(GlobalContext);

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2">
          <ul>
            <h1>Authors</h1>
            {authors.map((author, i) => (
              <div key={i}>
                <AuthorTemplate author={author} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Authors;
