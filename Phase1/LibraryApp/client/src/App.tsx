import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/Book/BookList";
import AuthorList from "./components/Author/AuthorList";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import PublisherList from "./components/Publisher/PubliherList";
import GlobalContext from "./components/Context";
import { AuthorI, BookI } from "./Types/types";
import { useState } from "react";
import EditBook from "./components/Book/EditBook";

function App() {
  const [books, setBooks] = useState<BookI[]>([]);
  const [authors, setAuthors] = useState<AuthorI[]>([]);

  return (
    <GlobalContext.Provider value={{ books, setBooks, authors, setAuthors }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/books" element={<BookList />}></Route>
          <Route path="editBook" element={<EditBook />} />
          <Route path="/authors" element={<AuthorList />} />
          <Route path="/publishers" element={<PublisherList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
