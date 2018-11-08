import React from "react";
import "./Button.css";

const Button = props => (
  <div className="button">
    <a className="modal-button waves-effect waves-light btn" href={props.href}>
      {props.text}{" "}
    </a>
  </div>
);

export default Button;
