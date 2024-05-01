import http from "../axios";

export interface Book {
  id: string;
  title: string;
  genre: string;
  isbn: string;
  format: string;
  summary: string;
}

export function updateBook(updatedBook: Book) {
  try {
    console.log("updating Books");
    return http.put(`${updatedBook.id}`, { updateBook });
  } catch (e) {
    console.log("Error Updating Book: ", e);
  }
}
