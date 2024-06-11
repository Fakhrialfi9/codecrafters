import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./../../../Resources/LocalRoute/UserRoute/ComponentsRoute/NavbarRoute/NavbarRoute";
import Header from "./../../../Resources/LocalRoute/UserRoute/ComponentsRoute/HeaderRoute/HeaderRoute";
import Footer from "./../../../Resources/LocalRoute/UserRoute/ComponentsRoute/FooterRoute/FooterRoute";
import FloatingActionButton from "./../../../Resources/LocalRoute/UserRoute/ComponentsRoute/FloatingActionButtonRoute/FloatingActionButton";
import RoutesPages from "./../../../Resources/LocalRoute/UserRoute/PagesRoute/RoutesPages";

import "./../../MainStyle/Root.css";

function UserRoute() {
  return (
    <div className="MainLayout">
      <Navbar />
      <Header />
      <RoutesPages />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

export default UserRoute;
