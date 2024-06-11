import React from "react"; // Pastikan mengimpor useState

import "./../../../../../Style/Components/Navbar/Navbar.css";
import "./../../../../../Style/Components/Navbar/NavbarResponsive/NavbarHuge.css";
import "./../../../../../Style/Components/Navbar/NavbarResponsive/NavbarTablet.css";
import "./../../../../../Style/Components/Navbar/NavbarResponsive/NavbarMobile.css";

function NavbarCenter() {
  return (
    <section>
      <div className="NavbarCenter">
        <ul className="NavbarCenterMenu">
          {/* Start Menu Item Navbar */}
          <li className="NavbarCenterItem">
            <a className="NavbarCenterLink" href="/">
              Home
            </a>
          </li>
          <li className="NavbarCenterItem">
            <a className="NavbarCenterLink" href="codecrafters/Product">
              Product
            </a>
          </li>
          <li className="NavbarCenterItem">
            <a className="NavbarCenterLink" href="codecrafters/About">
              About
            </a>
          </li>
          <li className="NavbarCenterItem">
            <a className="NavbarCenterLink" href="codecrafters/Contact">
              Contact
            </a>
          </li>
          <li className="NavbarCenterItem">
            <a className="NavbarCenterLink" href="codecrafters/TheArticle">
              The Arti-cle
            </a>
          </li>
          {/* End Menu Item Navbar */}
        </ul>
      </div>
    </section>
  );
}

export default NavbarCenter;
