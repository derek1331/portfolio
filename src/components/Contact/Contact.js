import React from "react";
import "./Contact.css";
import Button from "../Button";
import Scrollspy from "react-scrollspy";
import ScrollToPrevious from "../ScrollToPrevious";
import Icon from "../Icon"

const Contact = () => (
  <div id="section-3" className="hero contact">
    <div className="subject container">
      <div className="row">
        <div className="col s4 offset-s4 center header-wrapper">
          <h1 className="">Contact</h1>


          <img
            src="/images/scrapy.jpg"
            alt=""
            class="circle responsive-img"
            style={{ height: "300px", width: "300px" }}
          />
            <br></br>
          <a href="https://github.com/derek1331" target="_blank" ><Icon icon="fab fa-github fa-5x social"/></a>
          <a href="https://www.linkedin.com/in/derekreed1331/" target="_blank" ><Icon icon="fab fa-linkedin fa-5x social"/></a>
          <a href="mailto:1331derek@gmail.com" target="_blank" ><Icon icon="fas fa-envelope fa-5x social"/></a>

            



    </div>
    </div>
      </div>

    <ScrollToPrevious pageSelector="#section-2" />
  </div>
);

export default Contact;
