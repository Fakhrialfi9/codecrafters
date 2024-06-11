import React from "react";

import Container from "react-bootstrap/esm/Container";

import "./../../../../Style/Pages/Profile/AboutUs.css";
import "./../../../../../Main/MainStyle/Root.css";

function AboutUs() {
  return (
    <section className="AboutUs">
      <Container fluid>
        <div className="AboutUsContainer">
          <div className="AboutUsContent">
            {/* Start About Us Code Crafters */}
            <Container>
              <div className="AboutUsCodeCraftersContainer">
                {/* Start Content Headline & Tagline */}
                <div className="AboutUsCodeCraftersContent">
                  <div className="Headline">
                    <h2>Code Crafters</h2>
                  </div>
                  <div className="Tagline">
                    <h5>Join us on the journey of crafting extraordinary digital art. Let's blend creativity and code to create an unforgettable impact together.</h5>
                  </div>
                </div>
                {/* End Content Headline & Tagline */}

                {/* Start Card About Us Code Crafters */}
                <div className="AboutUsCodeCraftersCardContainer">
                  <div className="AboutUsCodeCraftersContentTop">
                    <div className="AboutUsCodeCraftersContentLeftImgContentTop">
                      <div className="AboutUsCodeCraftersContentLeftCardImgTop"></div>
                    </div>
                    <div className="AboutUsCodeCraftersContentRightDescriptionContentTop">
                      <div className="AboutUsCodeCraftersContentRightCardDescriptionContentTop"></div>
                    </div>
                  </div>
                  <div className="AboutUsCodeCraftersContentBottom">
                    <div className="AboutUsCodeCraftersContentLeftImgContentBottom">
                      <div className="AboutUsCodeCraftersContentLeftCardImgBottom"></div>
                    </div>
                    <div className="AboutUsCodeCraftersContentRightDescriptionContentBottom">
                      <div className="AboutUsCodeCraftersContentRightCardDescriptionContentBottom"></div>
                    </div>
                  </div>
                </div>
                {/* End Card About Us Code Crafters */}
              </div>
            </Container>
            {/* End About Us Code Crafters */}

            {/* Start Team Code Crafters */}
            <Container>
              <div className="TheTeamCodeCraftersContainer">
                {/* Start Content Headline & Tagline */}
                <div className="TheTeamCodeCraftersContent">
                  <div className="Headline">
                    <h2>The Teams</h2>
                  </div>
                  <div className="Tagline">
                    <h5>Join us on the journey of crafting extraordinary digital art. Let's blend creativity and code to create an unforgettable impact together.</h5>
                  </div>
                </div>
                {/* End Content Headline & Tagline */}

                {/* Start Card About Us Code Crafters */}
                <div className="CardTheTeamCodeCraftersContainer">
                  <div className="CardTheTeamCodeCraftersContent">
                    {/* Start Card The Team Front-End */}
                    <div className="CardTheTeamCodeCrafters">
                      <div className="CardTheTeamCodeCraftersHeadline">
                        <h5>Front-End</h5>
                      </div>
                      <div className="CardTheTeamCodeCraftersName">
                        <h5>Muhammad Fakhri Alfi</h5>
                      </div>
                      <div className="CardTheTeamCodeCraftersContact">
                        <div className="CardTheTeamCodeCraftersContactCard"></div>
                        <div className="CardTheTeamCodeCraftersContactCard"></div>
                        <div className="CardTheTeamCodeCraftersContactCard"></div>
                        <div className="CardTheTeamCodeCraftersContactCard"></div>
                      </div>
                    </div>
                    {/* End Card The Team Front-End */}
                    {/* Start Card The Team Back-End */}
                    <div className="CardTheTeamCodeCrafters">
                      <div className="CardTheTeamCodeCraftersHeadline">
                        <h5>Back-End</h5>
                      </div>
                      <div className="CardTheTeamCodeCraftersName">
                        <h5>Muhammad Farid Alkautsar</h5>
                      </div>
                      <div className="CardTheTeamCodeCraftersContact">
                        <div className="CardTheTeamCodeCraftersContactCard"></div>
                        <div className="CardTheTeamCodeCraftersContactCard"></div>
                        <div className="CardTheTeamCodeCraftersContactCard"></div>
                        <div className="CardTheTeamCodeCraftersContactCard"></div>
                      </div>
                    </div>
                    {/* End Card The Team Back-End */}
                  </div>
                </div>
                {/* End Card About Us Code Crafters */}
              </div>
            </Container>
            {/* End Team Code Crafters */}

            {/* Start Team Code Crafters */}
            <Container>
              <div className="TheTeamCodeCraftersContainer">
                {/* Start Content Headline & Tagline */}
                <div className="TheTeamCodeCraftersContent">
                  <div className="Headline">
                    <h2>The Location</h2>
                  </div>
                  <div className="Tagline">
                    <h5>Join us on the journey of crafting extraordinary digital art. Let's blend creativity and code to create an unforgettable impact together.</h5>
                  </div>
                </div>
                {/* End Content Headline & Tagline */}

                {/* Start Card About Us Code Crafters */}
                <div className="CardTheLocationCodeCraftersContainer">
                  <div className="CardTheLocationCodeCraftersContent">
                    <div className="CardMapsTheLocationCodeCrafters">
                      <div className="CardAddressTheLocationCodeCrafters"></div>
                    </div>
                  </div>
                </div>
                {/* End Card About Us Code Crafters */}
              </div>
            </Container>
            {/* End Team Code Crafters */}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutUs;
