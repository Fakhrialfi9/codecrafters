import React from "react";

import Container from "react-bootstrap/Container";

import "./../../../../Style/Components/Footer/Footer.css";
import "./../../../../Style/Components/Footer/FooterResponsive/FooterMobile.css";
import "./../../../../Style/Components/Footer/FooterResponsive/FooterTablet.css";

function Footer() {
  return (
    <section>
      <Container fluid>
        <footer className="MainFooter">
          <div className="FooterContainer">
            <div className="FooterContent">
              <div className="FooterColl-1">
                <div className="ImgFooter">
                  <img src="" alt="" />
                </div>
                <div className="DescriptionFooter">
                  <p>Code Crafters is a online learning platform intended for web developers.Through series-series such as Laravel, Reactjs, Vuejs, InertiaJs, HTML, Bootstrap, Tailwind CSS, and more.</p>
                </div>
                <div className="IconSocialMediaContent">
                  <div className="IconSocialMedia">
                    <img src="" alt="" />
                  </div>
                  <div className="IconSocialMedia">
                    <img src="" alt="" />
                  </div>
                  <div className="IconSocialMedia">
                    <img src="" alt="" />
                  </div>
                  <div className="IconSocialMedia">
                    <img src="" alt="" />
                  </div>
                  <div className="IconSocialMedia">
                    <img src="" alt="" />
                  </div>
                  <div className="IconSocialMedia">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="FooterColl-2">
                <div className="ContentColl">
                  <h4>Index</h4>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">Roadmap</a>
                    </li>
                    <li>
                      <a href="/">Series</a>
                    </li>
                    <li>
                      <a href="/">Article</a>
                    </li>
                    <li>
                      <a href="/">Premium</a>
                    </li>
                    <li>
                      <a href="/">Peringkat</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="FooterColl-3">
                <div className="ContentColl">
                  <h4>Tambahan</h4>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">Roadmap</a>
                    </li>
                    <li>
                      <a href="/">Series</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="FooterColl-4">
                <div className="ContentColl">
                  <h4>Get In Touch</h4>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">Roadmap</a>
                    </li>
                    <li>
                      <a href="/">Series</a>
                    </li>
                    <li>
                      <a href="/">Article</a>
                    </li>
                    <li>
                      <a href="/">Premium</a>
                    </li>
                    <li>
                      <a href="/">Peringkat</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="FooterNewsLetterContainer">
            <div className="FooterNewsLetterContent">
              <div className="FooterNewsLetterLeft">
                <div className="DescriptionNewsLetter">
                  <p>
                    <b>Code Crafters</b> Bergabunglah dengan 23.000+ lainnya dan jangan pernah ketinggalan screencast, tips, tutorial, dan lainnya.
                  </p>
                </div>
              </div>
              <div className="FooterNewsLetterRight">
                <div className="FormNewsLetter">
                  <form action="">
                    <div className="ButtonFormNewsLetter">
                      <input type="email" placeholder="Email Address" name="email" />
                      <button type="submit">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="FooterCopyRightContainer">
            <div className="FooterCopyRightContent">
              <h5>Parsinta is a Trademark of Irsyad A. Panjaitan. © Copyright 2023 Parsinta. All rights reserved. Yes, all of them 000371291.</h5>
            </div>
          </div>
        </footer>
      </Container>
    </section>
  );
}

export default Footer;
