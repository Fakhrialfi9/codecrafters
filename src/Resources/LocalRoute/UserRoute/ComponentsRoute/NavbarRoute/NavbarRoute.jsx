import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./../../../../Views/User/Components/Navbar/Navbar";

function NavbarRouteUser() {
  return (
    <Router>
      <Routes>
        <Route path="codecrafters/" Component={Navbar} />
        <Route path="codecrafters/Home" Component={Navbar} />
        <Route path="codecrafters/TheArticle" Component={Navbar} />
        <Route path="codecrafters/Product" Component={Navbar} />
        <Route path="codecrafters/About" Component={Navbar} />
        <Route path="codecrafters/Contact" Component={Navbar} />
        <Route path="codecrafters/" Component={Navbar} />
        <Route path="codecrafters/DetailProduct" Component={Navbar} />
      </Routes>
    </Router>
  );
}

export default NavbarRouteUser;
