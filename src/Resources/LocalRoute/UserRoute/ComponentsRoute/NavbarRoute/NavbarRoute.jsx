import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./../../../../Views/User/Components/Navbar/Navbar";

function NavbarRouteUser() {
  return (
    <Routes>
      <Route path="codecrafters/" element={<Navbar />} />
      <Route path="codecrafters/Home" element={<Navbar />} />
      <Route path="codecrafters/TheArticle" element={<Navbar />} />
      <Route path="codecrafters/Product" element={<Navbar />} />
      <Route path="codecrafters/About" element={<Navbar />} />
      <Route path="codecrafters/Contact" element={<Navbar />} />
      <Route path="codecrafters/" element={<Navbar />} />
      <Route path="codecrafters/DetailProduct" element={<Navbar />} />
    </Routes>
  );
}

export default NavbarRouteUser;
