import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./../../../../Views/User/Components/Footer/Footer";

function FooterRouteUser() {
  return (
    <Routes>
      <Route path="codecrafters/" element={<Footer />} />
      <Route path="codecrafters/Home" element={<Footer />} />
      <Route path="codecrafters/TheArticle" element={<Footer />} />
      <Route path="codecrafters/Product" element={<Footer />} />
      <Route path="codecrafters/About" element={<Footer />} />
      <Route path="codecrafters/Contact" element={<Footer />} />
      <Route path="codecrafters/" element={<Footer />} />
    </Routes>
  );
}

export default FooterRouteUser;
