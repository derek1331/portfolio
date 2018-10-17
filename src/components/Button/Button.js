import React from "react";
import "./Button.css";

const Button = props => (
  <div className={props.className}>
    <a class="waves-effect waves-light btn" href={props.href}>
      {props.text}{" "}
    </a>
  </div>
);

export default Button;
