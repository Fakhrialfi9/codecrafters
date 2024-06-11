import React, { useState } from "react";

import "./../../../../../../Style/Components/Navbar/NavbarResponsive/NavbarHuge.css";
import "./../../../../../../Style/Components/Navbar/NavbarResponsive/NavbarTablet.css";
import "./../../../../../../Style/Components/Navbar/NavbarResponsive/NavbarMobile.css";

import LogoNavs from "./../../../../../../Asset/Icon/IconNavbar/LogoNavs.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, faTimes, faUserPlus, faSignInAlt, faBook, faNewspaper, faTags, faSun, faLanguage, faGear, faCoins } from "@fortawesome/free-solid-svg-icons";

function TopNavbarMobileLogin() {
  const [isActive, setIsActive] = useState(false);
  const handleButtonClick = () => {
    setIsActive(!isActive);

    if (!isActive) {
      // Menonaktifkan scrolling
      document.documentElement.style.overflow = "hidden"; // Untuk <html>
      document.body.style.overflow = "hidden"; // Untuk <body>
    } else {
      // Mengaktifkan scrolling
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  };

  const handleCloseSlideBar = () => {
    setIsActive(false);
    // Mengaktifkan scrolling ketika menutup
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  };

  return (
    <section>
      {/* Start Mobile Menu Top Fix */}
      <div className="TopNavbarResponsive">
        {/* Start Top Mobile Menu */}
        <div className="TopNavbarMobileContainer">
          <div className="TopNavbarMobileContent">
            <div className="TopNavbarMobileLeft">
              <div className="FormSearchMobile">
                <form action="" method="">
                  <input className="SearchMobile" type="search" placeholder=" Cari Layanan, Template, Bantuan" />
                </form>
              </div>
            </div>
            <div className="TopNavbarMobileRight">
              <button className="ButtonAvatarUserMobile ButtonAvatarUserMobilePulse" onClick={handleButtonClick}>
                <div className="AvatarUserMobile"></div>
              </button>
            </div>
          </div>
        </div>
        {/* End Top Mobile Menu */}
      </div>

      {/* Start Blur Background Effect */}
      <div onClick={handleCloseSlideBar} className={`BlurBackgroundSliderBar  ${isActive ? "active" : ""}`}></div>
      {/* End Blur Background Effect */}

      {/* Start Menu Slide Bar Avatar User */}
      <div className={`SlideBarMobileAvatarUser  ${isActive ? "active" : ""}`}>
        <div className="SlideBarMobileAvatarUserContainer">
          <div className="SlideBarMobileAvatarUserContent">
            {/* Start Top Menu Content Slide Bar */}
            <div className="SlideBarMobileAvatarUserTop">
              <div className="SlideBarMobileAvatarUserTopLeft">
                <img src={LogoNavs} alt="Logo Navbar" onClick={handleCloseSlideBar} />
              </div>
              <div className="SlideBarMobileAvatarUserTopRight">
                <button className="CloseSlideBarMobileAvatarUserTopRight" onClick={handleCloseSlideBar}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>
            {/* End Top Menu Content Slide Bar */}
            {/* Start Bottom Menu Content Slide Bar */}
            <div className="SlideBarMobileAvatarUserBottom">
              <div className="SlideBarMobileAvatarUserBottomContent">
                <ul className="SlideBarMobileAvatarUserBottomContentMenu">
                  {/* Start Item Icon Content Menu Slide Bar Navbar */}
                  <li className="SlideBarMobileAvatarUserBottomContentItem">
                    <a href="/" className="SlideBarMobileAvatarUserBottomContentLink">
                      <div className="SlideBarMobileAvatarUserBottomContentButtonLeft">
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      <div className="SlideBarMobileAvatarUserBottomContentButtonRight">
                        <span>
                          Hello, <b>M Fakhri Alfi</b>
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="SlideBarMobileAvatarUserBottomContentItem">
                    <a href="/" className="SlideBarMobileAvatarUserBottomContentLink">
                      <div className="SlideBarMobileAvatarUserBottomContentButtonLeft">
                        <FontAwesomeIcon icon={faCoins} />
                      </div>
                      <div className="SlideBarMobileAvatarUserBottomContentButtonRight">
                        <span>
                          Your Point
                          <button className="badgeCartMobileSlideBar">
                            <b>Not Yet</b>
                          </button>
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="SlideBarMobileAvatarUserBottomContentItem">
                    <a href="/" className="SlideBarMobileAvatarUserBottomContentLink">
                      <div className="SlideBarMobileAvatarUserBottomContentButtonLeft">
                        <FontAwesomeIcon icon={faTags} />
                      </div>
                      <div className="SlideBarMobileAvatarUserBottomContentButtonRight">
                        <span>
                          Your Discount
                          <button className="badgeCartMobileSlideBar">
                            <b>Not Yet</b>
                          </button>
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="SlideBarMobileAvatarUserBottomContentItem">
                    <a href="/" className="SlideBarMobileAvatarUserBottomContentLink">
                      <div className="SlideBarMobileAvatarUserBottomContentButtonLeft">
                        <FontAwesomeIcon icon={faBook} />
                      </div>
                      <div className="SlideBarMobileAvatarUserBottomContentButtonRight">
                        <span>Tutorial</span>
                      </div>
                    </a>
                  </li>
                  <li className="SlideBarMobileAvatarUserBottomContentItem">
                    <a href="/" className="SlideBarMobileAvatarUserBottomContentLink">
                      <div className="SlideBarMobileAvatarUserBottomContentButtonLeft">
                        <FontAwesomeIcon icon={faNewspaper} />
                      </div>
                      <div className="SlideBarMobileAvatarUserBottomContentButtonRight">
                        <span>Whats News</span>
                      </div>
                    </a>
                  </li>
                  <li className="SlideBarMobileAvatarUserBottomContentItem">
                    <a href="/" className="SlideBarMobileAvatarUserBottomContentLink">
                      <div className="SlideBarMobileAvatarUserBottomContentButtonLeft">
                        <FontAwesomeIcon icon={faSignInAlt} />
                      </div>
                      <div className="SlideBarMobileAvatarUserBottomContentButtonRight">
                        <span>Logout</span>
                      </div>
                    </a>
                  </li>
                  {/* End Item Icon Content Menu Slide Bar Navbar */}
                </ul>
              </div>
            </div>
            {/* End Bottom Menu Content Slide Bar */}

            {/* Start Setting Apparance */}
            <div className="SlideBarSettingMobile">
              <div className="SlideBarSettingMobileTextContent">
                Apparance <FontAwesomeIcon className="SlideBarSettingMobileIconContent" icon={faGear} />
              </div>
              <div className="SlideBarSettingMobileContainer">
                <div className="SlideBarSettingMobileContent">
                  {/* Start Apparance Icon */}
                  <div className="SlideBarSettingMobileContentIcon">
                    <div className="SlideBarSettingMobileContentIconleft">
                      <span>Theme Mode</span>
                    </div>
                    <div className="SlideBarSettingMobileContentIconRight">
                      <button>
                        <FontAwesomeIcon icon={faSun} />
                      </button>
                    </div>
                  </div>
                  <div className="SlideBarSettingMobileContentIcon">
                    <div className="SlideBarSettingMobileContentIconleft">
                      <span>Bahasa</span>
                    </div>
                    <div className="SlideBarSettingMobileContentIconRight">
                      <button>
                        <FontAwesomeIcon icon={faLanguage} />
                      </button>
                    </div>
                  </div>
                  <div className="SlideBarSettingMobileContentIcon">
                    <div className="SlideBarSettingMobileContentIconleft">
                      <span>Setting</span>
                    </div>
                    <div className="SlideBarSettingMobileContentIconRight">
                      <button>
                        <FontAwesomeIcon icon={faGear} />
                      </button>
                    </div>
                  </div>
                  {/* End Apparance Icon */}
                </div>
              </div>
            </div>
            {/* End Setting Apparance */}

            {/* Start Setting Apparance */}
            <div className="SlideBarSettingMobile">
              <div className="SlideBarSettingMobileTextContent">Company</div>
              <div className="SlideBarSettingMobileContainer">
                <div className="SlideBarSettingMobileContent">
                  {/* Start Apparance Icon */}
                  <div className="SlideBarSettingMobileContentIcon">
                    <div className="SlideBarSettingMobileContentIconleft">
                      <span>About Us</span>
                    </div>
                    <div className="SlideBarSettingMobileContentIconRight">
                      <button>
                        <FontAwesomeIcon icon={faSun} />
                      </button>
                    </div>
                  </div>
                  <div className="SlideBarSettingMobileContentIcon">
                    <div className="SlideBarSettingMobileContentIconleft">
                      <span>The Arti-Cle</span>
                    </div>
                    <div className="SlideBarSettingMobileContentIconRight">
                      <button>
                        <FontAwesomeIcon icon={faLanguage} />
                      </button>
                    </div>
                  </div>
                  {/* End Apparance Icon */}
                </div>
              </div>
            </div>
            {/* End Setting Apparance */}
          </div>
        </div>
      </div>
      {/* End Menu Slide Bar Avatar User */}
    </section>
  );
}

export default TopNavbarMobileLogin;
