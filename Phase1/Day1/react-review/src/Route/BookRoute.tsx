import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "../Components/PageNotFound";
import Index from "../Components/Book/Index";
import EditBook from "../Components/Book/EditBook";
import UpdateBook from "../Components/Book/UpdateBook";
import AddBook from "../Components/Book/AddBook";

function BookRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/book">
          <Route index element={<Index />} />
          <Route path="edit" element={<EditBook />} />
          <Route path="update" element={<UpdateBook />} />
          <Route path="add" element={<AddBook />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default BookRoute;
