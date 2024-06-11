import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../../../../Resources/Views/User/Pages/Home/Home";
import TheArticle from "../../../Views/User/Pages/TheArticle/TheArticle";
import Product from "../../../../Resources/Views/User/Pages/Product/Product";
import About from "../../../Views/User/Pages/AboutUs/About";
import Contact from "../../../../Resources/Views/User/Pages/Contact/Contact";
import DetailProduct from "../../../../Resources/Views/User/Pages/Product/Section/DetailProduct";

function RoutesPages() {
  return (
    <Router>
      <Routes>
        <Route path="codecrafters/" Component={Home} />
        <Route path="codecrafters/Home" Component={Home} />
        <Route path="codecrafters/TheArticle" Component={TheArticle} />
        <Route path="codecrafters/Product" Component={Product} />
        <Route path="codecrafters/About" Component={About} />
        <Route path="codecrafters/Contact" Component={Contact} />
        <Route path="codecrafters/DetailProduct" Component={DetailProduct} />
      </Routes>
    </Router>
  );
}

export default RoutesPages;
