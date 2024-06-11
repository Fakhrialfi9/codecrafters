import React from "react";

import "./../../../../../../Style/Components/Navbar/NavbarResponsive/NavbarHuge.css";
import "./../../../../../../Style/Components/Navbar/NavbarResponsive/NavbarTablet.css";
import "./../../../../../../Style/Components/Navbar/NavbarResponsive/NavbarMobile.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart, faUser, faHeart } from "@fortawesome/free-solid-svg-icons";

function BottomNavbarMobileLogin() {
  return (
    <section>
      {/* Start Mobile Menu Bottom Fix */}
      <div className="BottomNavbarResponsive">
        <div className="BottomNavbarMobileContainer">
          <div className="BottomNavbarMobileContent">
            {/* Icon Navbar Bottom Mobile */}

            {/* Start Icon Left Bottom */}
            <div className="BottomNavbarMobileContentLeft">
              <b></b>
              <b></b>
              <ul className="BottomNavbarMobileMenu">
                <li className="BottomNavbarMobileItem">
                  <a href="/Profile" className="BottomNavbarMobileLink">
                    <button className="BottomNavbarMobileButton">
                      <FontAwesomeIcon icon={faUser} />
                      <div className="BottomNavbarMobilePagesName">Account</div>
                    </button>
                  </a>
                </li>
                <li className="BottomNavbarMobileItem">
                  <a href="/Product" className="BottomNavbarMobileLink">
                    <button className="BottomNavbarMobileButton">
                      <FontAwesomeIcon icon={faShoppingCart} />
                      <div className="BottomNavbarMobilePagesName">Product</div>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
            {/* End Icon Left Bottom */}

            {/* End Icon Center Bottom */}
            <div className="BottomNavbarMobileContentCenter">
              <div className="BottomNavbarMobileContentCenterContent">
                <ul className="BottomNavbarMobileMenu">
                  <li className="BottomNavbarMobileItem">
                    <a href="/" className="BottomNavbarMobileLink">
                      <button className="BottomNavbarMobileButton">
                        <FontAwesomeIcon icon={faHome} />
                        <div className="BottomNavbarMobilePagesName">Home</div>
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Icon Center Bottom */}

            {/* End Icon Right Bottom */}
            <div className="BottomNavbarMobileContentRight">
              <ul className="BottomNavbarMobileMenu">
                <li className="BottomNavbarMobileItem">
                  <a href="/Blog" className="BottomNavbarMobileLink">
                    <button className="BottomNavbarMobileButton">
                      <FontAwesomeIcon icon={faHeart} />
                      <div className="BottomNavbarBadge">
                        <b>0</b>
                      </div>
                      <div className="BottomNavbarMobilePagesName">Wishlist</div>
                    </button>
                  </a>
                </li>
                <li className="BottomNavbarMobileItem">
                  <a href="/Cart" className="BottomNavbarMobileLink">
                    <button className="BottomNavbarMobileButton">
                      <FontAwesomeIcon icon={faShoppingCart} />
                      <div className="BottomNavbarBadge">
                        <b>0</b>
                      </div>
                      <div className="BottomNavbarMobilePagesName">Cart</div>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
            {/* End Icon Right Bottom */}

            {/* Icon Navbar Bottom Mobile */}
          </div>
        </div>
      </div>
      {/* End Mobile Menu Bottom Fix */}
    </section>
  );
}

export default BottomNavbarMobileLogin;
