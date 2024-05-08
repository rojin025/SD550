export interface BookI {
  id: string;
  title: string;
  genre: string;
  isbn: string;
  format: string;
  summary: string;
  authors: string[];
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

export interface PublisherI {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
}
