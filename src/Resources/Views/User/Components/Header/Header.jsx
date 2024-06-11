import React from "react";

import Container from "react-bootstrap/Container"; // Perubahan di sini: menggunakan 'react-bootstrap/Container' bukan 'react-bootstrap/esm/Container'

import "./../../../../Style/Components/Header/Header.css";
import "./../../../../Style/Components/Header/HeaderResponsive/HeaderHuge.css";
import "./../../../../Style/Components/Header/HeaderResponsive/HeaderMobile.css";
import "./../../../../Style/Components/Header/HeaderResponsive/HeaderTablet.css";

import LogoNode from "./../../../../Asset/Header/LogoNode.svg";
import LogoReact from "./../../../../Asset/Header/LogoReact.svg";
import LogoExpress from "./../../../../Asset/Header/LogoExpress.svg";
import LogoBootstrap from "./../../../../Asset/Header/LogoBootstrap.svg";

function Header() {
  return (
    <section>
      <Container fluid>
        <header className="mainheader">
          <div className="ImgMainHeader">
            <div className="contentheader">
              <div className="headlineheader">
                <h1>CodeCrafters: Crafting Code, Creating Impact</h1>
              </div>
              <div className="taglineheader text-center">
                <h5>Join us on the journey of crafting extraordinary digital art. Let's blend creativity and code to create an unforgettable impact together.</h5>
              </div>
              <div className="buttonheader">
                <button>Join With Us</button>
              </div>
              <div className="cardcontainer">
                <div className="cardheader">
                  <img src={LogoNode} alt="LogoNode" />
                </div>
                <div className="cardheader">
                  <img src={LogoReact} alt="LogoReact" />
                </div>
                <div className="cardheader">
                  <img src={LogoExpress} alt="LogoExpreess" />
                </div>
                <div className="cardheader">
                  <img src={LogoBootstrap} alt="LogoBootstrap" />
                </div>
              </div>
            </div>
          </div>
        </header>
      </Container>
    </section>
  );
}

export default Header;
