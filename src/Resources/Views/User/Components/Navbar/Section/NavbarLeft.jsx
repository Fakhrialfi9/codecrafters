import React from "react"; // Pastikan mengimpor useState

import LogoNavs from "./../../../../../Asset/Icon/IconNavbar/LogoNavs.svg";
import LogoNavsWhite from "./../../../../../Asset/Icon/IconNavbar/LogoNavsWhite.svg";

import "./../../../../../Style/Components/Navbar/Navbar.css";
import "./../../../../../Style/Components/Navbar/NavbarResponsive/NavbarHuge.css";
import "./../../../../../Style/Components/Navbar/NavbarResponsive/NavbarTablet.css";
import "./../../../../../Style/Components/Navbar/NavbarResponsive/NavbarMobile.css";

function NavbarLeft() {
  return (
    <section>
      <div className="NavbarLeft">
        <a href="/">
          <img src={LogoNavs} alt="Logo Navbar" />
        </a>
      </div>
    </section>
  );
}

export default NavbarLeft;
