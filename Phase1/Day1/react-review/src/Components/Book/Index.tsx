import { Link, useLocation } from "react-router-dom";

function Index() {
  const location = useLocation();
  const book = location.state;
  return (
    <div>
      {book && <p>Recieved Book: {book}</p>}

      <h1>Book Index</h1>
      <nav>
        <ul>
          <li>
            <Link to="/book/edit">Edit Book</Link>
          </li>
          <li>
            <Link to="/book/update">Update Book</Link>
          </li>
          <li>
            <Link to="/book/add">Add Book</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Index;
