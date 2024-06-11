import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FloatingActionButton from "./../../../../Views/User/Components/FloatingActionButton/FloatingActionButton";

function FloatingActionButtonRouteUser() {
  return (
    <Router>
      <Routes>
        <Route path="codecrafters/" Component={FloatingActionButton} />
        <Route path="codecrafters/Home" Component={FloatingActionButton} />
        <Route path="codecrafters/TheArticle" Component={FloatingActionButton} />
        <Route path="codecrafters/Product" Component={FloatingActionButton} />
        <Route path="codecrafters/About" Component={FloatingActionButton} />
        <Route path="codecrafters/Contact" Component={FloatingActionButton} />
        <Route path="codecrafters/" Component={FloatingActionButton} />
      </Routes>
    </Router>
  );
}

export default FloatingActionButtonRouteUser;
