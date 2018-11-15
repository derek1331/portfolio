import React from "react";
import "./About.css";
import Button from "../Button";
import Scrollspy from "react-scrollspy";
import { ScrollToNext } from "../ScrollToNext";

const About = () => (
  <div id="section-1" className="hero about ">
    <div className=" container subject">
      <div className="row">
        <div className="col m6 offset-m3 s12 header-wrapper center">
          <h1 className="page-header"> About</h1>
        </div>
      </div>
      <div className="row">
        <div
          className="col m6 offset-m3 s12"
        >
        <div  style={{ border: "1px solid white", padding: "24px" }}>
          <span className="left-align about-bio" style={{ fontSize: "1.3rem" }}>
            I was always good with computers growing up but that's where it
            ended. I figured it was time to be great with them. So I moved to
            Denver and started my journey. 6 months later I'm now a Full Stack Web
            Developer. Skilled in JavaScript, HTML, CSS, React, Node.js, Express.js MongoDB
            and MySQL. I'm detail oriented, passionate about creating more
            efficient applications and always learning.
          </span>
          </div>
        <div className="center">
        <i class="fab fa-js fa-3x social" />
          <i class="fab fa-html5 fa-3x social" />
          <i class="fab fa-css3-alt fa-3x social" />
          <i class="fab fa-react fa-3x social " />
          <i class="fab fa-node-js fa-3x social" />
          <i class="icon-mongodb social" style={{fontSize:"3em"}} />
          <i class="icon-mysql-alt social" style={{fontSize:"3em"}} />
          </div>
      </div>
      </div>
    </div>
    <ScrollToNext pageSelector="#section-2" />
  </div>
);

export default About;
