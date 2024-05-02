import { ChangeEvent, useState, MouseEvent, useContext } from "react";
import { AppContext, BASE_URL } from "../../App";

import axios from "axios";

function AddAuthorToBook() {
  const [id, setId] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const { books } = useContext(AppContext);

  async function findBook() {
    try {
      const res = await axios.get(`${BASE_URL}books/${id}`);
      if (res.status !== 200) {
        throw new Error("Book not found");
      }
    } catch (e) {
      console.log("Something went wrong on seaching book: ", e);
    }
  }

  function handleSearch(e: MouseEvent<HTMLButtonElement>) {
    console.log("Click");
    findBook();
  }

  return (
    <div>
      <h2>Add Author in Book:</h2>
      <input
        placeholder="id"
        name="id"
        value={id}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setId(e.currentTarget.value)
        }
      />
      <input
        placeholder="New Author"
        name="New Author"
        value={newAuthor}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewAuthor(e.currentTarget.value)
        }
      />
      <button onClick={handleSearch}>Add Author in Book</button>
    </div>
  );
}

export default AddAuthorToBook;
