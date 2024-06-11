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
          <Route exact path="/" Component={Navbar} />
          <Route exact path="/Home" Component={Navbar} />
          <Route exact path="/TheArticle" Component={Navbar} />
          <Route exact path="/Product" Component={Navbar} />
          <Route exact path="/About" Component={Navbar} />
          <Route exact path="/Contact" Component={Navbar} />
          <Route exact path="/" Component={Navbar} />
          <Route exact path="/DetailProduct" Component={Navbar} />
        </Routes>
        <Routes>
          <Route exact path="/" Component={Header} />
          <Route exact path="/Home" Component={Header} />
          <Route exact path="/TheArticle" Component={Header} />
          <Route exact path="/Product" Component={Header} />
          <Route exact path="/About" Component={Header} />
          <Route exact path="/Contact" Component={Header} />
          <Route exact path="/" Component={Header} />
        </Routes>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/Home" Component={Home} />
          <Route exact path="/TheArticle" Component={TheArticle} />
          <Route exact path="/Product" Component={Product} />
          <Route exact path="/About" Component={About} />
          <Route exact path="/Contact" Component={Contact} />
          <Route exact path="/DetailProduct" Component={DetailProduct} />
        </Routes>
        <Routes>
          <Route exact path="/" Component={FloatingActionButton} />
          <Route exact path="/Home" Component={FloatingActionButton} />
          <Route exact path="/TheArticle" Component={FloatingActionButton} />
          <Route exact path="/Product" Component={FloatingActionButton} />
          <Route exact path="/About" Component={FloatingActionButton} />
          <Route exact path="/Contact" Component={FloatingActionButton} />
          <Route exact path="/" Component={FloatingActionButton} />
        </Routes>
        <Routes>
          <Route exact path="/" Component={Footer} />
          <Route exact path="/Home" Component={Footer} />
          <Route exact path="/TheArticle" Component={Footer} />
          <Route exact path="/Product" Component={Footer} />
          <Route exact path="/About" Component={Footer} />
          <Route exact path="/Contact" Component={Footer} />
          <Route exact path="/" Component={Footer} />
        </Routes>
      </Router>
    </div>
  );
}

export default UserRoute;
