import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import GlobalContext from "../GlobalContext";
import Publisher from "./Publisher";

import { BASE_URL } from "../Book/BookList";

function PublisherList() {
  const { publishers, setPublishers } = useContext(GlobalContext);

  const [displayPublishers, setDisplayPublishers] = useState(publishers);
  const [serachText, setSerachText] = useState("");

  const navTo = useNavigate();

  useEffect(() => {
    const loadPublishers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}publishers`);
        if (res.status !== 200) throw new Error("Oh no! Publishers!!!");
        setPublishers(res.data);
      } catch (error) {
        console.log("Error Loading Publishers:", error);
      }
    };
    loadPublishers();
  }, []);

  useEffect(() => {
    setDisplayPublishers(publishers);
  }, [publishers]);

  const handleSearch = () => {
    const result = publishers.filter((publisher) =>
      publisher.name.toLowerCase().startsWith(serachText.trim().toLowerCase())
    );
    setDisplayPublishers(result);
  };

  return (
    <>
      <div className="position-sticky top-0 m-4">
        <div className="row">
          <div className="col" onClick={() => navTo("/home")}>
            <h3>Library📚</h3>
          </div>
          <div className="col">
            <h3>Publishers</h3>
          </div>
          <div className="col" onClick={() => navTo("/addPublisher")}>
            <h3>Add</h3>
          </div>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Publisher"
          onChange={(e: any) => setSerachText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {displayPublishers.map((publisher) => (
          <Publisher key={publisher.id} publisher={publisher} />
        ))}
      </div>
    </>
  );
}

export default PublisherList;
