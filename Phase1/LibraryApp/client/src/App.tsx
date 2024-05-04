import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/Book/BookList";
import AuthorList from "./components/Author/AuthorList";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import PublisherList from "./components/Publisher/PubliherList";
import GlobalContext from "./components/GlobalContext";
import { AuthorI, BookI, PublisherI } from "./Types/types";
import { useState } from "react";
import EditBook from "./components/Book/EditBook";
import EditPublisher from "./components/Publisher/EditPublisher";

function App() {
  const [books, setBooks] = useState<BookI[]>([]);
  const [authors, setAuthors] = useState<AuthorI[]>([]);
  const [publishers, setPublishers] = useState<PublisherI[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        books,
        setBooks,
        authors,
        setAuthors,
        publishers,
        setPublishers,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="editBook" element={<EditBook />} />
          <Route path="/authors" element={<AuthorList />} />
          <Route path="/publishers" element={<PublisherList />} />
          <Route path="/editPublisher" element={<EditPublisher />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
