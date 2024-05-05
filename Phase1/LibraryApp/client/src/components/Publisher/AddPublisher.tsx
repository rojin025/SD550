import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { BASE_URL } from "../Book/BookList";
import GlobalContext from "../GlobalContext";

import { PublisherI } from "../../Types/types";

const initialPublisher = {
  id: "",
  name: "",
  phone: "",
  email: "",
  address: "",
};

function AddPublisher() {
  const { publishers, setPublishers } = useContext(GlobalContext);
  const navTo = useNavigate();
  const [publisher, setPublisher] = useState<PublisherI>(initialPublisher);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPublisher({ ...publisher, [name]: value });
  };

  const handleAdd = async () => {
    if (!publisher.id || !publisher.name) return;

    try {
      const res = await axios.post(`${BASE_URL}/publishers`, publisher);
      if (res.status !== 201) throw new Error("Failed Creating Publisher");
      setPublishers([...publishers, publisher]);
      window.alert(`Publisher Created: ${publisher}.`);
    } catch (error) {
      console.log("Error Adding Publisher");
    }
  };

  return (
    <div>
      <div className="Header">
        <div className="position-sticky top-0 m-4">
          <h1></h1>
          <div className="row">
            <div className="col" onClick={() => navTo("/home")}>
              <h3>Library📚 </h3>
            </div>
            <div className="col"></div>
            <div className="col" onClick={() => navTo("/publishers")}>
              <h3>Publishers</h3>
            </div>
          </div>
          <hr />
        </div>
        <h3 className="text-center fs-1 fw-lighter">Add New Publisher</h3>
        <hr />
      </div>

      <div className="container px-5">
        <form className="row g-3 mt-1">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              ID
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              name="id"
              value={publisher.id}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={publisher.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={publisher.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={publisher.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={publisher.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleAdd}
            >
              Add Publisher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPublisher;
