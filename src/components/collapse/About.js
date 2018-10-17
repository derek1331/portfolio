import React from "react";
import "./About.css";
import Button from "../Button";

const About = () => (
  <div id="section-1" className="hero flex about">
    <div className="subject flex">
      <div className="hero-message">
        <span>About</span>
      </div>

      <Button text="About" />
      <Button text="Projects" />
      <Button text="Contact" />
    </div>
  </div>
);

export default About;
