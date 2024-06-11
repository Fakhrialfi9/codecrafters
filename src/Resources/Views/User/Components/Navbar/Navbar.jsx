import React from "react"; // Mengimpor useEffect

import Container from "react-bootstrap/esm/Container";

import NavbarLeft from "./Section/NavbarLeft";
import NavbarCenter from "./Section/NavbarCenter";
import NavbarRight from "./Section/NavbarRight";
import NavbarMobile from "./Section/NavbarMobile";

import "./../../../../Style/Components/Navbar/Navbar.css";
import "./../../../../Style/Components/Navbar/NavbarResponsive/NavbarHuge.css";
import "./../../../../Style/Components/Navbar/NavbarResponsive/NavbarTablet.css";
import "./../../../../Style/Components/Navbar/NavbarResponsive/NavbarMobile.css";

import NavbarSticky from "../../../../LogicBoard/Navbar/NavbarSticky";

function Navbar() {
  const { nonStickyNavbar } = NavbarSticky();

  return (
    <main>
      <section id="NavbarSection">
        <nav className="MainNavbar">
          <Container fluid>
            <div className="NavbarContainer">
              <div className="NavbarContent">
                {/* Navbar Left Section */}
                <NavbarLeft />
                {/* Navbar Left Section */}

                {/* Navbar Center Section */}
                <NavbarCenter />
                {/* Navbar Center Section */}

                {/* Navbar Right Section */}
                <NavbarRight />
                {/* Navbar Right Section */}
              </div>
            </div>
          </Container>
        </nav>
        <NavbarMobile />
      </section>
    </main>
  );
}

export default Navbar;
