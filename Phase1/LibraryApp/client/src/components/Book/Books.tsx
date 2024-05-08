import BookTemplate from "./Book";
import { BookI } from "../../Types/types";
import { useContext } from "react";
import GlobalContext from "../GlobalContext";

function Books() {
  const { books } = useContext(GlobalContext);
  return (
    <>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-s-2 ">
            <ul>
              <h1>Books</h1>
              {books.map((book, i) => (
                <div key={i}>
                  <BookTemplate book={book} />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Books;
