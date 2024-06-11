import React from "react"; // Pastikan mengimpor useState

import TopNavbarMobileLogin from "./LogInNavbarMobile/TopNavbarMobileLogin";
import BottomNavbarMobileLogin from "./LogInNavbarMobile/BottomNavbarMobileLogin";

import "./../../../../../Style/Components/Navbar/Navbar.css";
import "./../../../../../Style/Components/Navbar/NavbarResponsive/NavbarHuge.css";
import "./../../../../../Style/Components/Navbar/NavbarResponsive/NavbarTablet.css";
import "./../../../../../Style/Components/Navbar/NavbarResponsive/NavbarMobile.css";

function NavbarMobile() {
  return (
    <section id="" className="NavbarResponsive">
      {/* Start Top Navbar Login */}
      <TopNavbarMobileLogin />
      {/* End Top Navbar Login */}

      {/* Start Mobile Menu Bottom Fix */}
      <BottomNavbarMobileLogin />
      {/* End Mobile Menu Bottom Fix */}
    </section>
  );
}

export default NavbarMobile;
