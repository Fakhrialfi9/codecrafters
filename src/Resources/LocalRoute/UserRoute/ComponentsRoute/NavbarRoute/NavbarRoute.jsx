import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./../../../../Views/User/Components/Navbar/Navbar";

function NavbarRouteUser() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/Home" element={<Navbar />} />
      <Route path="/TheArticle" element={<Navbar />} />
      <Route path="/Product" element={<Navbar />} />
      <Route path="/About" element={<Navbar />} />
      <Route path="/Contact" element={<Navbar />} />
      <Route path="/" element={<Navbar />} />
      <Route path="/DetailProduct" element={<Navbar />} />
    </Routes>
  );
}

export default NavbarRouteUser;
