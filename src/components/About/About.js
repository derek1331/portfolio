import React from "react";
import "./About.css";
import Button from "../Button";
import Wrapper from "../Wrapper";
import Scrollspy from "react-scrollspy";



const About = () => (
  <div id="section-1" className="hero flex about">
    <Wrapper>
      <div className="subject flex">
        <Scrollspy
          items={["section-1", "section-2", "section-3"]}
          currentClassName="is-current"
          style={{ flexDirection: "row", display: "flex" }}
        >
          <Button text="About" href="#section-1" />
          <Button text="Projects" href="#section-2" />
          <Button text="Contact" href="#section-3" />
        </Scrollspy>

        <div className="hero-message">
          <span> Contact</span>
        </div>
        
      </div>
    </Wrapper>
  </div>
);

export default About;

