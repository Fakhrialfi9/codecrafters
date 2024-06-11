import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./../../../../Views/User/Components/Header/Header";

function HeaderRouteUser() {
  return (
    <Router>
      <Routes>
        <Route path="codecrafters/" Component={Header} />
        <Route path="codecrafters/Home" Component={Header} />
        <Route path="codecrafters/TheArticle" Component={Header} />
        <Route path="codecrafters/Product" Component={Header} />
        <Route path="codecrafters/About" Component={Header} />
        <Route path="codecrafters/Contact" Component={Header} />
        <Route path="codecrafters/" Component={Header} />
      </Routes>
    </Router>
  );
}

export default HeaderRouteUser;
