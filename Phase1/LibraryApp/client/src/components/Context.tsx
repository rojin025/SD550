import { createContext } from "react";
import { AuthorI, BookI } from "../Types/types";

interface AppContextType {
  books: BookI[];
  setBooks: (books: BookI[]) => void;

  authors: AuthorI[];
  setAuthors: (authors: AuthorI[]) => void;
}

const initialContext = {
  books: [],
  setBooks: () => {},
  authors: [],
  setAuthors: () => {},
};

const GlobalContext = createContext<AppContextType>(initialContext);

export default GlobalContext;
