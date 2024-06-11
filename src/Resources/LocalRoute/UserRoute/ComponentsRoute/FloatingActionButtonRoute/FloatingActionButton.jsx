import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FloatingActionButton from "./../../../../Views/User/Components/FloatingActionButton/FloatingActionButton";

function FloatingActionButtonRouteUser() {
  return (
    <Routes>
      <Route path="/" element={<FloatingActionButton />} />
      <Route path="/Home" element={<FloatingActionButton />} />
      <Route path="/TheArticle" element={<FloatingActionButton />} />
      <Route path="/Product" element={<FloatingActionButton />} />
      <Route path="/About" element={<FloatingActionButton />} />
      <Route path="/Contact" element={<FloatingActionButton />} />
      <Route path="/" element={<FloatingActionButton />} />
    </Routes>
  );
}

export default FloatingActionButtonRouteUser;
