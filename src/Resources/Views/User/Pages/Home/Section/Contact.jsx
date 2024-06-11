import React from "react";

import "./../../../../../Style/Pages/Home/Home.css";
import "./../../../../../Style/Pages/Home/Responsive/HomeStyleMobile.css";
import "./../../../../../Style/Pages/Home/Responsive/HomeStyleTablet.css";
import "./../../../../../Style/Pages/Home/Responsive/HomeStyleHuge.css";

function Contact() {
  return (
    <section>
      <div className="FormContactContainer">
        <form action="" method="">
          <div className="FormContactContent">
            <div className="FormContactLeft">
              <input className="ContactSearchBar" type="text" placeholder="Your Name" />
              <input className="ContactSearchBar" type="Email" placeholder="Your Email" />
            </div>
            <div className="FormContactRight">
              <input className="ContactSearchBar" type="textarea" placeholder="Whats You Need" style={{ height: "90px" }} />
            </div>
          </div>
          <div className="ButtonContactSubmitForm">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Contact;
