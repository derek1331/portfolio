import React from "react";
import "./About.css";
import Button from "../Button";
import Scrollspy from "react-scrollspy";
import ScrollToNext from "../ScrollToNext";

const About = () => (
  <div id="section-1" className="hero about ">
    <div className=" container subject">
      <div className="row">
        <div className="col s4 offset-s4">
          <h1 className="center-align"> About</h1>
        </div>
      </div>

    </div>
      <ScrollToNext pageSelector="#section-2"/>


  </div>

);

export default About;
