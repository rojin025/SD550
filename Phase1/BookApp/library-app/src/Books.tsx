import BookTemplates from "./Book";
import { Book } from "./Types/types";

interface props {
  books: Book[];
}
function handleClick() {
  console.log("Cicked. ");
}
function Books({ books }: props) {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 ">
          <ul>
            {books.map((book, i) => (
              <div key={i}>
                <BookTemplates book={book} onClick={handleClick} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Books;
