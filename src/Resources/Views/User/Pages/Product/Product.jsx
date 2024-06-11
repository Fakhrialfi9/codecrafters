import React, { useState } from "react";

import Container from "react-bootstrap/esm/Container";

import "./../../../../Style/Pages/Product/Product.css";
import "./../../../../../Main/MainStyle/Root.css";

import OurProduct from "./../Home/Section/OurProduct";

import ThemeProduct from "./Section/ThemeProduct";

function Product() {
  const [activeTab, setActiveTab] = useState("LandingPage");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="Product">
      {/* Product */}
      <Container fluid>
        <div className="ProductContainer">
          <div className="ProductContent">
            {/* Start Product Recommendation */}
            <Container>
              <div className="ProductRecommendationContainer">
                <div className="ProductRecommendationContent">
                  <div className="Headline">
                    <h2>Product Recommendation</h2>
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
            {/* End Product Recommendation */}

            <div className="SectionBreak"></div>

            {/* Start Desktop Side Bar Tab Link */}
            <Container fluid>
              <div className="AllProductCodeCrafters">
                <div className="ProductRecommendationContent">
                  <div className="Headline">
                    <h2>Theme Product</h2>
                  </div>
                  <div className="Tagline">
                    <h5>Join us on the journey of crafting extraordinary digital art. Let's blend creativity and code to create an unforgettable impact together.</h5>
                  </div>
                </div>
                {/* End Thme All Product */}
                <ThemeProduct />
                {/* End Thme All Product */}
              </div>
            </Container>
            {/* End Desktop Side Bar Tab Link */}

            <div className="SectionBreak"></div>

            {/* Start Promotion Product */}
            <Container fluid>
              <div className="BannerProductDiscountContainer">
                <div className="BannerProductDiscountContent">
                  <div className="Headline">
                    <h2>Discount Product</h2>
                  </div>
                  <div className="Tagline">
                    <h5>Join us on the journey of crafting extraordinary digital art. Let's blend creativity and code to create an unforgettable impact together.</h5>
                  </div>
                </div>
                {/* Our Product */}
                <div className="CardBannerProductDiscountContainer">
                  <div className="CardBannerProductDiscountContent"></div>
                </div>
                {/* Our Product */}
              </div>
            </Container>
            {/* End Promotion Product */}

            <div className="SectionBreak"></div>
          </div>
        </div>
      </Container>
      {/* Product */}
    </section>
  );
}

export default Product;
