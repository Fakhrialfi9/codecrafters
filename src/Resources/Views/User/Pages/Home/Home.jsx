import React from "react";

import Container from "react-bootstrap/esm/Container";

import "./../../../../Style/Pages/Home/Home.css";
import "./../../../../../Main/MainStyle/Root.css";

import OurProduct from "./Section/OurProduct";
import WhyChooseUs from "./Section/WhyChooseUs";
import OurServices from "./Section/OurServices";
import WhatsUpdate from "./Section/WhatsUpdate";
import TheArtcile from "./Section/TheArticle";
import Faq from "./Section/Faq";
import Contact from "./Section/Contact";

function Home() {
  return (
    <section className="Home">
      {/* Home */}
      <Container fluid>
        <div className="HomeContainer">
          <div className="HomeContent">
            {/* Start Content Home Section Our Product */}
            <Container>
              <div className="OurProductContainer">
                <div className="OurProductContent">
                  <div className="Headline">
                    <h2>Our Product</h2>
                  </div>
                  <div className="Tagline">
                    <h5>Join us on the journey of crafting extraordinary digital art. Let's blend creativity and code to create an unforgettable impact together.</h5>
                  </div>
                </div>
                {/* Our Product */}
                <OurProduct />
                {/* Our Product */}
              </div>
            </Container>
            {/* End Content Home Section Our Product */}

            <div className="SectionBreak"></div>

            {/* Start Content Home Section Why Choose Us */}
            <Container>
              <div className="WhyChooseUsContainer">
                <div className="WhyChooseUsContent">
                  <div className="Headline">
                    <h2>Why Choose Us</h2>
                  </div>
                  <div className="Tagline">
                    <h5>Join us on the journey of crafting extraordinary digital art. Let's blend creativity and code to create an unforgettable impact together.</h5>
                  </div>
                </div>
                {/* Why Choose Us */}
                <WhyChooseUs />
                {/* Why Choose Us */}
              </div>
            </Container>
            {/* End Content Home Section Why Choose Us */}

            <div className="SectionBreak"></div>

            {/* Start Content Home Section Why Choose Us */}
            <Container fluid>
              <div className="OurServicesContainer">
                <div className="OurServicesContent">
                  <div className="Headline">
                    <h2>Our Services</h2>
                  </div>
                  <div className="Tagline">
                    <h5>Join us on the journey of crafting extraordinary digital art. Let's blend creativity and code to create an unforgettable impact together.</h5>
                  </div>
                </div>
                {/* Why Choose Us */}
                <OurServices />
                {/* Why Choose Us */}
              </div>
            </Container>
            {/* End Content Home Section Why Choose Us */}

            <div className="SectionBreak"></div>

            {/* Start Content Home Section Whats News */}
            <Container fluid>
              <div className="WhatsNewsContainer">
                <div className="WhatsNewsContent">
                  <div className="Headline">
                    <h2>Whats Updates</h2>
                  </div>
                  <div className="Tagline">
                    <h5>Join us on the journey of crafting extraordinary digital art. Let's blend creativity and code to create an unforgettable impact together.</h5>
                  </div>
                </div>
                {/* Whats News */}
                <WhatsUpdate />
                {/* Whats News */}
              </div>
            </Container>
            {/* End Content Home Section Whats News */}

            <div className="SectionBreak"></div>

            {/* Start Content Home Section Whats News */}
            <Container>
              <div className="TheArticleContainer">
                <div className="TheArticleContent">
                  <div className="Headline">
                    <h2>The Arti-Cle</h2>
                  </div>
                  <div className="Tagline">
                    <h5>Join us on the journey of crafting extraordinary digital art. Let's blend creativity and code to create an unforgettable impact together.</h5>
                  </div>
                </div>
                {/* Whats News */}
                <TheArtcile />
                {/* Whats News */}
              </div>
            </Container>
            {/* End Content Home Section Whats News */}

            <div className="SectionBreak"></div>

            {/* Start Content Home Section Whats News */}
            <Container>
              <div className="FaqContainer">
                <div className="FaqContent">
                  <div className="Headline">
                    <h2>Frequently Asked Question</h2>
                  </div>
                  <div className="Tagline">
                    <h5>Join us on the journey of crafting extraordinary digital art. Let's blend creativity and code to create an unforgettable impact together.</h5>
                  </div>
                </div>
                {/* Whats News */}
                <Faq />
                {/* Whats News */}
              </div>
            </Container>
            {/* End Content Home Section Whats News */}

            <div className="SectionBreak"></div>

            {/* Start Content Home Section Whats News */}
            <Container fluid>
              <div className="ContactUsContainer">
                <div className="ContactUsContent">
                  <div className="Headline">
                    <h2>Contact Us</h2>
                  </div>
                  <div className="Tagline">
                    <h5>Join us on the journey of crafting extraordinary digital art. Let's blend creativity and code to create an unforgettable impact together.</h5>
                  </div>
                </div>
                {/* Whats News */}
                <Contact />
                {/* Whats News */}
              </div>
            </Container>
            {/* End Content Home Section Whats News */}

            <div className="SectionBreak"></div>
          </div>
        </div>
      </Container>
      {/* Home */}
    </section>
  );
}

export default Home;
