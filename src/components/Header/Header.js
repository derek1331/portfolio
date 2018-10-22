import React from "react";
import "./Header.css";
import Button from "../Button";

const Header = () => (
  <div className="header"> 
    <div className="subject container center name">
      <div className="hero-message">
        <span>Hello, I'm</span>
        <span className="hero-name"> Derek Reed</span>

        <br />
        <span>I'm a Full-Stack Web Developer</span>


      </div>
      <i class="fab fa-github fa-3x"></i>
      <i class="fab fa-linkedin fa-3x"></i>


        <Button className="hero-button" text="View My Work" href="#section-1" />

    </div>
  </div>
);

export default Header;
