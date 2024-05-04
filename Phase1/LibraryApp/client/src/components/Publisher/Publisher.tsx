import { useNavigate } from "react-router-dom";
import { PublisherI } from "../../Types/types";

interface props {
  publisher: PublisherI;
}

function Publisher({ publisher }: props) {
  const navigate = useNavigate();
  const handleEdit = (e: any) => {};
  const handleDelete = (e: any) => {};
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
                <div className="card-body">
                  <div className="col">
                    <div className="container ">
                      <div className="row">
                        <div className="col">
                          <button
                            className="btn  btn-secondary"
                            onClick={() =>
                              navigate("/editPublisher", { state: publisher })
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
