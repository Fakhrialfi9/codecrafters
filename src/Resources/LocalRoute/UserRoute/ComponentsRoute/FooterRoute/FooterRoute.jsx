import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./../../../../Views/User/Components/Footer/Footer";

function FooterRouteUser() {
  return (
    <Router>
      <Routes>
        <Route path="codecrafters/" Component={Footer} />
        <Route path="codecrafters/Home" Component={Footer} />
        <Route path="codecrafters/TheArticle" Component={Footer} />
        <Route path="codecrafters/Product" Component={Footer} />
        <Route path="codecrafters/About" Component={Footer} />
        <Route path="codecrafters/Contact" Component={Footer} />
        <Route path="codecrafters/" Component={Footer} />
      </Routes>
    </Router>
  );
}

export default FooterRouteUser;
