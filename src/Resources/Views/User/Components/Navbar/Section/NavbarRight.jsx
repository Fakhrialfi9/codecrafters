import React from "react"; // Pastikan mengimpor useState

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSignInAlt, faSun } from "@fortawesome/free-solid-svg-icons";

import "./../../../../../Style/Components/Navbar/Navbar.css";
import "./../../../../../Style/Components/Navbar/NavbarResponsive/NavbarHuge.css";
import "./../../../../../Style/Components/Navbar/NavbarResponsive/NavbarTablet.css";
import "./../../../../../Style/Components/Navbar/NavbarResponsive/NavbarMobile.css";

function NavbarLeft() {
  return (
    <section>
      <div className="NavbarRight">
        <ul className="NavbarRightMenu">
          {/* Start Menu Button Navbar */}
          <li className="NavbarRightItem">
            <button className="NavbarRightButton">
              <FontAwesomeIcon icon={faSignInAlt} />
            </button>
          </li>
          <li className="NavbarRightItem">
            <button className="NavbarRightButton">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </li>
          <li className="NavbarRightItem">
            <button className="NavbarRightButton">
              <FontAwesomeIcon icon={faSun} />
            </button>
          </li>
          {/* End Menu Button Navbar */}
        </ul>
      </div>
    </section>
  );
}

export default NavbarLeft;
