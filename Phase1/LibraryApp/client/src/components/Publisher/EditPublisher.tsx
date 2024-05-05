import axios from "axios";
import { MouseEvent, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../Book/BookList";
import GlobalContext from "../GlobalContext";

function EditPublisher() {
  const { publishers, setPublishers } = useContext(GlobalContext);
  const location = useLocation();

  const [publisher, setPublisher] = useState(location.state || {});
  const navTo = useNavigate();
  console.log(location);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setPublisher({ ...publisher, [name]: value });
  };

  const handleUpdate = async (e: MouseEvent<HTMLButtonElement>) => {
    const confirm = window.confirm("Do you want to change Publisher?");
    if (confirm) {
      try {
        const res = await axios.put(
          `${BASE_URL}publishers/${publisher.id}`,
          publisher
        );
        if (res.status !== 200) throw new Error("Cannot find publisher in DB.");
        const index = publishers.findIndex(
          (target) => target.id == publisher.id
        );
        if (index === -1) throw new Error("Publisher not in state.");
        console.log("index: ", index);
        publishers[index] = res.data;
        setPublishers([...publishers]);
        window.history.back();
      } catch (error) {
        console.log("Error on UpdatePublisher:", error);
      }
    }
  };

  return (
    <div className="container">
      <h2>Edit Publisher</h2>
      <div className="container">
        <form>
          <div>
            <label htmlFor="id">Id: </label>
            <input
              name="id"
              type="text"
              id="id"
              value={publisher.id}
              //   disabled
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              name="name"
              type="text"
              id="name"
              value={publisher.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phone">phone: </label>
            <input
              name="phone"
              type="text"
              id="phone"
              value={publisher.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">email: </label>
            <input
              name="email"
              type="text"
              id="email"
              value={publisher.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="address">address: </label>
            <input
              name="address"
              type="text"
              id="address"
              value={publisher.address}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleUpdate}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EditPublisher;
