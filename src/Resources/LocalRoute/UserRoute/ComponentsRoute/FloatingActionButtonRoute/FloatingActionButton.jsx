import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FloatingActionButton from "./../../../../Views/User/Components/FloatingActionButton/FloatingActionButton";

function FloatingActionButtonRouteUser() {
  return (
    <Routes>
      <Route path="codecrafters/" element={<FloatingActionButton />} />
      <Route path="codecrafters/Home" element={<FloatingActionButton />} />
      <Route path="codecrafters/TheArticle" element={<FloatingActionButton />} />
      <Route path="codecrafters/Product" element={<FloatingActionButton />} />
      <Route path="codecrafters/About" element={<FloatingActionButton />} />
      <Route path="codecrafters/Contact" element={<FloatingActionButton />} />
      <Route path="codecrafters/" element={<FloatingActionButton />} />
    </Routes>
  );
}

export default FloatingActionButtonRouteUser;
