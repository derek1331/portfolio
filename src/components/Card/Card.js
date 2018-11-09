import React from "react";
import "./Card.css";
import { CardPanel } from "react-materialize";

class Cardy extends React.Component {
  render() {
    return (
      <CardPanel className="col s4 center">
        <span style={{fontSize: "1.64rem", color: "#272727", paddingBottom: "30px"}}>{this.props.title}</span>
        {this.props.children}
      </CardPanel>
    );
  }
}

export default Cardy;
