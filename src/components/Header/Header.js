import React from "react";
import "./Header.css";
import Button from "../Button";
import {ScrollButton} from "../ScrollToNext"

const Header = () => (
  <div className="header">
    <div className="subject container center name">
      <div className="hero-message">
        <span>Hello, I'm</span>
        <span className="hero-name"> Derek Reed</span>

        <br />
        <span>I'm a Full-Stack Web Developer</span>

      </div>
      <ScrollButton pageSelector="#section-1"/>

    </div>
  </div>
);

export default Header;
