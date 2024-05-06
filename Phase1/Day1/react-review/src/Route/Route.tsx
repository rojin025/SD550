import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "../Components/Home";
import PageNotFound from "../Components/PageNotFound";

function RouterApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/navigateToHome" element={<Navigate to="/home" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterApp;
