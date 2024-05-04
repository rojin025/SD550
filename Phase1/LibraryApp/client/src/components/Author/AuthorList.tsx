import { useContext, useEffect, useState } from "react";

import axios from "axios";

import GlobalContext from "../GlobalContext";
import { BASE_URL } from "../Book/BookList";
import Authors from "./Authors";

function AuthorList() {
  const { authors, setAuthors } = useContext(GlobalContext);

  useEffect(() => {
    getAllAuthors();
  }, []);

  async function getAllAuthors() {
    try {
      const res = await axios.get(`${BASE_URL}authors`);
      if (res.status !== 200) {
        throw new Error("Status Not 200");
      }
      const data = res.data;
      setAuthors(data);
      console.log("Authors", data);
    } catch (e) {
      console.log("Error getting data: ", e);
    }
  }

  return (
    <div>
      <h1>AuthorList</h1>
      <Authors />
    </div>
  );
}

export default AuthorList;
