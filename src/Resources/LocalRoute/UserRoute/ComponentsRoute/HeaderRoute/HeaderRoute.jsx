import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./../../../../Views/User/Components/Header/Header";

function HeaderRouteUser() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/Home" element={<Header />} />
      <Route path="/TheArticle" element={<Header />} />
      <Route path="/Product" element={<Header />} />
      <Route path="/About" element={<Header />} />
      <Route path="/Contact" element={<Header />} />
      <Route path="/" element={<Header />} />
    </Routes>
  );
}

export default HeaderRouteUser;
