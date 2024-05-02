import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ path: "about", element: <About /> }],
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
