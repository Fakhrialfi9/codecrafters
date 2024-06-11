import React from "react";

import Container from "react-bootstrap/esm/Container";

import "./../../../../Style/Pages/Contact/Contact.css";
import "./../../../../../Main/MainStyle/Root.css";

function Contact() {
  return (
    <section className="Contact">
      {/* Contact */}
      <Container fluid>
        <div className="ContactContainer">
          <div className="ContactContent">
            {/* Start Get In Touch */}
            <div className="GetInTouchContactUsContainer">
              <div className="GetInTouchContactUsContent">
                <div className="GetInTouchContactUsContentLeft">
                  <h2 className="HeadlineContactUs">Get In Touch</h2>
                  <p className="TagLineContactUs">Join us on the journey of crafting extraordinary digital art. Let's blend creativity and code to create an unforgettable impact together.</p>
                </div>
                <div className="GetInTouchContactUsContentRight">
                  <div className="CardFormGetInTouchContactus">
                    <form action="" method="">
                      <div className="GetInTouchContactUsForm">
                        <input className="GetInTouchContactUs InputText" type="text" placeholder="Your Name" />
                        <input className="GetInTouchContactUs InputEmail" type="email" placeholder="Your Email" />
                        <input className="GetInTouchContactUs InputTextArea" type="textarea" placeholder="Whats You Need" />
                      </div>
                      <div className="GetInTouchContactUsSubmitForm">
                        <button>Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* End Get In Touch */}
          </div>
        </div>
      </Container>
      {/* Contact */}
    </section>
  );
}

export default Contact;
