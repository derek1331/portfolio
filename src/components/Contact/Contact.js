import React from "react";
import "./Contact.css";
import Button from "../Button";
import Wrapper from "../Wrapper";
import Scrollspy from "react-scrollspy";
import { Row, Input, Icon } from "react-materialize";

const Contact = () => (
  <div id="section-3" className="hero flex contact">
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

        <div className="flex">
          <Row className="form white">
            <Input className="" s={12} label="Name" validate>
            </Input>
            <Input s={12} label="Email" validate type="email">
            </Input>
            <Input s={12} type='textarea' label="Message" validate />

          </Row>
        </div>
      </div>
    </Wrapper>
  </div>
);

export default Contact;
