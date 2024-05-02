import BookTemplates from "./Book";
import { Book } from "../../Types/types";
import { useContext } from "react";
import { AppContext } from "../../App";

function handleClick() {
  console.log("Cicked. ");
}

function Books() {
  const { books } = useContext(AppContext);
  return (
    <>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-s-2 ">
            <ul>
              <h1>Books</h1>
              {books.map((book, i) => (
                <div key={i}>
                  <BookTemplates book={book} onClick={handleClick} />
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
