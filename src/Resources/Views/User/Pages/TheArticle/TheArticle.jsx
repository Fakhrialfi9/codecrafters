import React from "react";

import Container from "react-bootstrap/esm/Container";

import TheArtcile from "../Home/Section/TheArticle";

import "./../../../../Style/Pages/TheArticle/TheArticle.css";
import "./../../../../../Main/MainStyle/Root.css";

function Blog() {
  return (
    <section className="Blog">
      {/* Blog */}
      <Container fluid>
        <div className="BlogContainer">
          <div className="BlogContent">
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
          </div>
        </div>
      </Container>
      {/* Blog */}
    </section>
  );
}

export default Blog;
