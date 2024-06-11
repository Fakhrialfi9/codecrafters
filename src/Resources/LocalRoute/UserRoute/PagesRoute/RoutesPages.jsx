import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../../../Resources/Views/User/Pages/Home/Home";
import TheArticle from "../../../Views/User/Pages/TheArticle/TheArticle";
import Product from "../../../../Resources/Views/User/Pages/Product/Product";
import About from "../../../Views/User/Pages/AboutUs/About";
import Contact from "../../../../Resources/Views/User/Pages/Contact/Contact";
import DetailProduct from "../../../../Resources/Views/User/Pages/Product/Section/DetailProduct";

function RoutesPages() {
  return (
    <Routes>
      <Route path="codecrafters/" element={<Home />} />
      <Route path="codecrafters/Home" element={<Home />} />
      <Route path="codecrafters/TheArticle" element={<TheArticle />} />
      <Route path="codecrafters/Product" element={<Product />} />
      <Route path="codecrafters/About" element={<About />} />
      <Route path="codecrafters/Contact" element={<Contact />} />
      <Route path="codecrafters/DetailProduct" element={<DetailProduct />} />
    </Routes>
  );
}

export default RoutesPages;
