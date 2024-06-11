import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./../../../../Views/User/Components/Header/Header";

function HeaderRouteUser() {
  return (
    <Routes>
      <Route path="codecrafters/" element={<Header />} />
      <Route path="codecrafters/Home" element={<Header />} />
      <Route path="codecrafters/TheArticle" element={<Header />} />
      <Route path="codecrafters/Product" element={<Header />} />
      <Route path="codecrafters/About" element={<Header />} />
      <Route path="codecrafters/Contact" element={<Header />} />
      <Route path="codecrafters/" element={<Header />} />
    </Routes>
  );
}

export default HeaderRouteUser;
