import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./../../../../Views/User/Components/Footer/Footer";

function FooterRouteUser() {
  return (
    <Routes>
      <Route path="/" element={<Footer />} />
      <Route path="/Home" element={<Footer />} />
      <Route path="/TheArticle" element={<Footer />} />
      <Route path="/Product" element={<Footer />} />
      <Route path="/About" element={<Footer />} />
      <Route path="/Contact" element={<Footer />} />
      <Route path="/" element={<Footer />} />
    </Routes>
  );
}

export default FooterRouteUser;
