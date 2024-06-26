import { useContext, useEffect, useState } from "react";
import GlobalContext from "./Context";
import IBook from "./IBook";
import Book from "./Book";
import { useNavigate } from "react-router-dom";

export default function BookList() {
  const { books } = useContext(GlobalContext);
  const [displayBooks, setDisplayBooks] = useState(books);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setDisplayBooks(books);
  }, [books]);

  const onSearch = () => {
    const arr = books.filter((book) =>
      book.title.toLowerCase().startsWith(searchText.trim().toLowerCase())
    );
    setDisplayBooks(arr);
  };

  const navigateToAddBook = () => {
    navigate("/add-book");
  };

  return (
    <div>
      <h3>Book List</h3>
      <button onClick={navigateToAddBook}>Add Book</button>
      <input
        placeholder="Search"
        value={searchText}
        onChange={(e: any) => setSearchText(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
      {displayBooks.map((book: IBook) => (
        <Book key={book.id} data={book} />
      ))}
    </div>
  );
}
