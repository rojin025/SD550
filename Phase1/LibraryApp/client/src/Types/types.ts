export interface BookI {
  id: string;
  title: string;
  genre: string;
  isbn: string;
  format: string;
  summary: string;
  authors: AuthorI[];
  publisher: number;
  catalog: Catalog;
}

export interface Catalog {
  numberOfCopies: number;
  availableCopies: number;
}

export interface AuthorI {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  address: string;
}

export interface PubliserI {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
}
