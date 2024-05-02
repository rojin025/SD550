import { ChangeEvent, useMemo, useState } from "react";
import { Author } from "../../Types/types";

function AddAuthor() {
  const [author, setAuthor] = useState<Author>({
    id: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
  });
  const [isAdd, setIsAdd] = useState(false);

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setAuthor({ ...author, [name]: value });
  }

  const AddAuthorForm = useMemo(() => {
    return (
      <div>
        <h1>Form</h1>
        <input
          placeholder="id"
          name="id"
          value={author.id}
          onChange={handleInput}
        />
        <input
          placeholder="firstname"
          name="firstname"
          value={author.firstname}
          onChange={handleInput}
        />
        <input
          placeholder="firstname"
          name="firstname"
          value={author.firstname}
          onChange={handleInput}
        />
      </div>
    );
  }, [author]);

  return (
    <>
      <button onClick={() => setIsAdd(!isAdd)}>Add Author</button>
      {isAdd && AddAuthorForm}
    </>
  );
}

export default AddAuthor;
