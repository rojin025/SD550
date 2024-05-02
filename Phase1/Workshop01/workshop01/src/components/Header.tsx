import { ChangeEvent, useState, MouseEvent, useContext } from "react";
import { AppContext } from "../App";
import { Book } from "../Types/types";

export default function Header() {
  const { books } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<Book[]>([]);

  function handleSearch(e: MouseEvent<HTMLButtonElement>) {
    console.log("Click");

    const arr = books.filter((book) =>
      book.title.toLowerCase().startsWith(search.trim().toLowerCase())
    );
    setSearchResult(arr);
  }

  return (
    <>
      <header className="App-header">
        <h1>Library</h1>
        <input
          type="text"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.currentTarget.value)
          }
        />
        <button onClick={handleSearch}>Search</button>
      </header>
      <div>
        {searchResult.map((search) => (
          <p>{search.title}</p>
        ))}
      </div>
    </>
  );
}
