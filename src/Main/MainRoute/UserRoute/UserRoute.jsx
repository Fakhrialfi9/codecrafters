import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./../../../Resources/Views/User/Components/Navbar/Navbar";
import Header from "./../../../Resources/Views/User/Components/Header/Header";
import Footer from "./../../../Resources/Views/User/Components/Footer/Footer";
import FloatingActionButton from "./../../../Resources/Views/User/Components/FloatingActionButton/FloatingActionButton";

import Home from "../../../Resources/Views/User/Pages/Home/Home";
import TheArticle from "../../../Resources/Views/User/Pages/TheArticle/TheArticle";
import Product from "../../../Resources/Views/User/Pages/Product/Product";
import About from "../../../Resources/Views/User/Pages/AboutUs/About";
import Contact from "../../../Resources/Views/User/Pages/Contact/Contact";
import DetailProduct from "../../../Resources/Views/User/Pages/Product/Section/DetailProduct";

import "./../../MainStyle/Root.css";

function UserRoute() {
  return (
    <div className="MainLayout">
      <Router>
        <Routes>
          <Route exact path="codecrafters/" Component={Navbar} />
          <Route exact path="codecrafters/Home" Component={Navbar} />
          <Route exact path="codecrafters/TheArticle" Component={Navbar} />
          <Route exact path="codecrafters/Product" Component={Navbar} />
          <Route exact path="codecrafters/About" Component={Navbar} />
          <Route exact path="codecrafters/Contact" Component={Navbar} />
          <Route exact path="codecrafters/" Component={Navbar} />
          <Route exact path="codecrafters/DetailProduct" Component={Navbar} />
        </Routes>
        <Routes>
          <Route exact path="codecrafters/" Component={Header} />
          <Route exact path="codecrafters/Home" Component={Header} />
          <Route exact path="codecrafters/TheArticle" Component={Header} />
          <Route exact path="codecrafters/Product" Component={Header} />
          <Route exact path="codecrafters/About" Component={Header} />
          <Route exact path="codecrafters/Contact" Component={Header} />
          <Route exact path="codecrafters/" Component={Header} />
        </Routes>
        <Routes>
          <Route exact path="codecrafters/" Component={Home} />
          <Route exact path="codecrafters/Home" Component={Home} />
          <Route exact path="codecrafters/TheArticle" Component={TheArticle} />
          <Route exact path="codecrafters/Product" Component={Product} />
          <Route exact path="codecrafters/About" Component={About} />
          <Route exact path="codecrafters/Contact" Component={Contact} />
          <Route exact path="codecrafters/DetailProduct" Component={DetailProduct} />
        </Routes>
        <Routes>
          <Route exact path="codecrafters/" Component={FloatingActionButton} />
          <Route exact path="codecrafters/Home" Component={FloatingActionButton} />
          <Route exact path="codecrafters/TheArticle" Component={FloatingActionButton} />
          <Route exact path="codecrafters/Product" Component={FloatingActionButton} />
          <Route exact path="codecrafters/About" Component={FloatingActionButton} />
          <Route exact path="codecrafters/Contact" Component={FloatingActionButton} />
          <Route exact path="codecrafters/" Component={FloatingActionButton} />
        </Routes>
        <Routes>
          <Route exact path="codecrafters/" Component={Footer} />
          <Route exact path="codecrafters/Home" Component={Footer} />
          <Route exact path="codecrafters/TheArticle" Component={Footer} />
          <Route exact path="codecrafters/Product" Component={Footer} />
          <Route exact path="codecrafters/About" Component={Footer} />
          <Route exact path="codecrafters/Contact" Component={Footer} />
          <Route exact path="codecrafters/" Component={Footer} />
        </Routes>
      </Router>
    </div>
  );
}

export default UserRoute;
