import React from "react";
import "./Header.css";
import Button from "../Button";
import Scrollspy from "react-scrollspy";

const Header = () => (
  <div className="hero header flex-header">
    <div className="subject section-header flex-header">
      <div className="hero-message">
        <span>Hello, I'm</span>
        <span className="hero-name"> Derek Reed</span>

        <br />
        <span>I'm a Full-Stack Web Developer</span>
      </div>
      <Scrollspy
        items={["section-1", "section-2", "section-3"]}
        currentClassName="is-current"
      >
        <Button className="hero-button" text="About" href="#section-1" />
        <Button className="hero-button" text="Projects" href="#section-2" />
        <Button className="hero-button" text="Contact" href="#section-3" />
      </Scrollspy>
    </div>
  </div>
);

export default Header;
