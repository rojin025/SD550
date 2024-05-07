import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import GlobalContext from "./components/GlobalContext";
import Home from "./components/Home";
import BookList from "./components/Book/BookList";
import EditBook from "./components/Book/EditBook";
import AuthorList from "./components/Author/AuthorList";
import PublisherList from "./components/Publisher/PubliherList";
import AddPublisher from "./components/Publisher/AddPublisher";
import EditPublisher from "./components/Publisher/EditPublisher";
import PageNotFound from "./components/PageNotFound";

import { AuthorI, BookI, PublisherI } from "./Types/types";

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
          <Route path="home" element={<Home />} />

          <Route path="books" element={<BookList />} />
          <Route path="editBook" element={<EditBook />} />

          <Route path="authors" element={<AuthorList />} />

          <Route path="publishers" element={<PublisherList />} />
          <Route path="addPublisher" element={<AddPublisher />} />
          <Route path="editPublisher" element={<EditPublisher />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
