/**
To Do
- Edit a book
- axios Delete req
- form element from bootstrap
 */

import { ChangeEvent, FormEvent, useState } from "react";
import axios from "../apis/axios";

const BASE_URL = "http://localhost:9000/";

function DeleteBook() {
  const [id, setId] = useState("");

  async function deleteBook() {
    try {
      const res = await axios.delete(`${BASE_URL}books/${id}`, {});
      if (res.status !== 200) {
        throw new Error("Couldnot find book.");
      }
      console.log("Successfully Deleted Book.");
      console.log(res);
    } catch (e) {
      console.log("Error Deleting Book: ", e);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Deleting Book.");
    deleteBook();
  }
  return (
    <div>
      <h1>DeleteBook</h1>
      <div className="form-floating">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Id:"
            className="form-control"
            id="floatingInput"
            name="title"
            value={id}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setId(e.target.value)
            }
          />
        </form>
      </div>
    </div>
  );
}

export default DeleteBook;
