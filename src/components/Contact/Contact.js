import React from "react";
import "./Contact.css";
import Button from "../Button";
import Scrollspy from "react-scrollspy";
import { Row, Input, Icon } from "react-materialize";
import ScrollToPrevious from "../ScrollToPrevious"

const Contact = () => (
  <div id="section-3" className="hero contact">
    <div className="subject container">
      <div className="row">
        <div className="col s4 offset-s4">
          <h1 className="center-align">Contact</h1>

          <div className="">
            <Row className="form">
              <Input className="" s={12} placeholder="Name" validate />
              <Input s={12} placeholder="Email" validate type="email" />
              <Input s={12} type="textarea" placeholder="Message" validate />
            </Row>
          </div>
        </div>
      </div>
    </div>
    <ScrollToPrevious pageSelector="#section-2"/>
  </div>
);

export default Contact;
