export interface Book {
  id: string;
  title: string;
  genre: string;
  isbn: string;
  format: string;
  summary: string;
}

export interface Author {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  address: string;
}
