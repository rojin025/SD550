import { createContext } from "react";
import { AuthorI, BookI, PublisherI } from "../Types/types";

interface ContextType {
  books: BookI[];
  setBooks: (books: BookI[]) => void;

  authors: AuthorI[];
  setAuthors: (authors: AuthorI[]) => void;

  publishers: PublisherI[];
  setPublishers: (publishers: PublisherI[]) => void;
}

const initialContext = {
  books: [],
  setBooks: () => {},
  authors: [],
  setAuthors: () => {},
  publishers: [],
  setPublishers: () => {},
};

const GlobalContext = createContext<ContextType>(initialContext);

export default GlobalContext;
