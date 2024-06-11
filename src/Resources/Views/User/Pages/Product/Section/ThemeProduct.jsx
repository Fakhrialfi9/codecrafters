import React, { useState } from "react";

import LandingPage from "./../Section/ThemeProduct/LandingPage";

function ThemeProduct() {
  const [activeTab, setActiveTab] = useState("LandingPage");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section>
      <div className="AllProductCodeCraftersContainer">
        <div className="AllProductCodeCraftersContent">
          {/* Start Side Bar Navbar Link Left */}
          <div className="AllProductCodeCraftersContentSideBarLeft">
            <div className="AllProductCodeCraftersContentSideBarLeftContainer">
              <ul className="AllProductCodeCraftersContentSideBarLeftMenu">
                <li className="AllProductCodeCraftersContentSideBarLeftItem">
                  <a onClick={() => handleTabClick("LandingPage")} className={`AllProductCodeCraftersContentSideBarLeftLink ${activeTab === "LandingPage" ? "active" : ""}`}>
                    Landing Page
                  </a>
                </li>
                <li className="AllProductCodeCraftersContentSideBarLeftItem">
                  <a onClick={() => handleTabClick("CompanyProfile")} className={`AllProductCodeCraftersContentSideBarLeftLink ${activeTab === "Blogging" ? "active" : ""}`}>
                    Company Profile
                  </a>
                </li>
                <li className="AllProductCodeCraftersContentSideBarLeftItem">
                  <a onClick={() => handleTabClick("Blogging")} className={`AllProductCodeCraftersContentSideBarLeftLink ${activeTab === "Blogging" ? "active" : ""}`}>
                    Blogging
                  </a>
                </li>
                <li className="AllProductCodeCraftersContentSideBarLeftItem">
                  <a onClick={() => handleTabClick("SiteTemplate")} className={`AllProductCodeCraftersContentSideBarLeftLink ${activeTab === "Blogging" ? "active" : ""}`}>
                    Site Template
                  </a>
                </li>
                <li className="AllProductCodeCraftersContentSideBarLeftItem">
                  <a onClick={() => handleTabClick("MarketingAdsTemplate")} className={`AllProductCodeCraftersContentSideBarLeftLink ${activeTab === "Blogging" ? "active" : ""}`}>
                    Marketing Ads Template
                  </a>
                </li>
                <li className="AllProductCodeCraftersContentSideBarLeftItem">
                  <a onClick={() => handleTabClick("MarketingTemplate")} className={`AllProductCodeCraftersContentSideBarLeftLink ${activeTab === "Blogging" ? "active" : ""}`}>
                    Marketing Template
                  </a>
                </li>
                <li className="AllProductCodeCraftersContentSideBarLeftItem">
                  <a onClick={() => handleTabClick("Portfolio")} className={`AllProductCodeCraftersContentSideBarLeftLink ${activeTab === "Blogging" ? "active" : ""}`}>
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* End Side Bar Navbar Link Left */}

          {/* Start Side Bar Navbar Link Right */}
          <div className="AllProductCodeCraftersContentSideBarRight">
            <div className="AllProductCodeCraftersContentSideBarRightContainer">
              {/* Start Card All Product Side Bar */}

              <div id="LandingPage" className={`LandingPage ${activeTab === "LandingPage" ? "active" : ""}`}>
                {/* Start Card All Product Side Bar */}
                {activeTab === "LandingPage" && (
                  <div>
                    <LandingPage />
                  </div>
                )}
                {/* End Card All Product Side Bar */}
              </div>

              <div id="CompanyProfile" className={`CompanyProfile ${activeTab === "CompanyProfile" ? "active" : ""}`}>
                {/* Start Card All Product Side Bar */}
                {activeTab === "CompanyProfile" && (
                  <div>
                    <LandingPage />
                  </div>
                )}
                {/* End Card All Product Side Bar */}
              </div>

              {/* End Card All Product Side Bar */}
            </div>
          </div>
          {/* End Side Bar Navbar Link Right */}
        </div>
      </div>
    </section>
  );
}

export default ThemeProduct;
