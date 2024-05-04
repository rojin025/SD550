import { useContext, useEffect, useMemo } from "react";
import GlobalContext from "../GlobalContext";
import axios from "axios";
import { BASE_URL } from "../Book/BookList";
import Publisher from "./Publisher";
import { useNavigate } from "react-router-dom";

function PublisherList() {
  const { publishers, setPublishers } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPublishers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}publishers`);
        console.log(res.data);
        if (res.status !== 200) throw new Error("Oh no.");
        setPublishers(res.data);
      } catch (error) {
        console.log("Error Loading Publishers:", error);
      }
    };
    loadPublishers();
  }, []);

  return (
    <>
      <div className="position-sticky top-0 m-2">
        <div className="row">
          <div className="col" onClick={() => navigate("/home")}>
            <h3>Home🏠</h3>
          </div>
          <div className="col">
            <h3>Publishers 🎉</h3>
          </div>
        </div>
      </div>
      <div>
        {publishers.map((publisher) => (
          <Publisher key={publisher.id} publisher={publisher} />
        ))}
      </div>
    </>
  );
}

export default PublisherList;
