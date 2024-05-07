import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { BASE_URL } from "../Book/BookList";
import GlobalContext from "../GlobalContext";

import { PublisherI } from "../../Types/types";

interface props {
  publisher: PublisherI;
}

function Publisher({ publisher }: props) {
  const { publishers, setPublishers } = useContext(GlobalContext);

  const navTo = useNavigate();

  const handleDelete = async (e: any) => {
    const confirm = window.confirm(`Do you want to delete ${publisher.name}?`);
    if (!confirm) return;
    try {
      const res = await axios.delete(`${BASE_URL}publishers/${publisher.id}`);
      if (res.status !== 200) throw new Error("Unable to Delete");
      const updatedPublishers = publishers.filter(
        (currentPublisher) => currentPublisher.id !== publisher.id
      );
      setPublishers(updatedPublishers);
    } catch (error) {
      console.log("Error Deleting: ", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="col m-3">
          <div className="card shadow-sm">
            <svg
              className="bd-placeholder-img card-img-top"
              width="30%"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect
                width="100%"
                height="100%"
                fill="#55595c"
                data-darkreader-inline-fill=""
              ></rect>
              <text
                x="35%"
                y="50%"
                fill="#eceeef"
                dy=".3em"
                data-darkreader-inline-fill=""
              >
                {publisher.name}
              </text>
            </svg>
            <div className="card-body">
              <div className="col">
                <div>Id: {publisher.id}</div>
                <div>phone: {publisher.phone}</div>
                <div>Email: {publisher.email}</div>
                {/* handleDelete is inside card body */}
                <div className="card-body">
                  <div className="col">
                    <div className="container ">
                      <div className="row">
                        <div className="col">
                          <button
                            className="btn  btn-secondary"
                            onClick={() =>
                              navTo("/editPublisher", { state: publisher })
                            }
                          >
                            Edit
                          </button>
                        </div>
                        <div className="col">
                          <button
                            className="btn btn-danger"
                            onClick={handleDelete}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Publisher;
