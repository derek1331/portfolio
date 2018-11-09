import React from "react";
import "./Card.css";
import { CardPanel } from "react-materialize";

class Cardy extends React.Component {
  render() {
    return (
      <CardPanel className="col s4 center" style={{backgroundColor: "#272727"}}>
        <span style={{fontSize: "1.64rem", color: "white", paddingBottom: "30px"}}>{this.props.title}</span>
        {this.props.children}
      </CardPanel>
    );
  }
}

export default Cardy;
