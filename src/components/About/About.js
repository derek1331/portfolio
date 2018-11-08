import React from "react";
import "./About.css";
import Button from "../Button";
import Scrollspy from "react-scrollspy";
import { ScrollToNext } from "../ScrollToNext";

const About = () => (
  <div id="section-1" className="hero about ">
    <div className=" container subject">
      <div className="row">
        <div className="col s4 offset-s4 header-wrapper">
          <h1 className="page-header"> About</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12 center-align ">
          <span>
            I was always good with computers growing up but that's where it
            ended. I figured it was time to be great with them. So I moved to
            Denver and started my journey. Full Stack Developer. Skilled in
            JavaScript, HTML, CSS, Node.js, React, MySQL and MongoDB. Detail
            oriented worker passionate about creating more efficient
            applications.
          </span>
        </div>
        <i class="fab fa-react fa-5x social " />
        <i class="fab fa-js fa-5x social" />
        <i class="fab fa-html5 fa-5x social" />
        <i class="fab fa-css3-alt fa-5x social" />
      </div>
    </div>
    <ScrollToNext pageSelector="#section-2" />
  </div>
);

export default About;
