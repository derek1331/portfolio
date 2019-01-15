import React from "react";
import "./Card.css";
import { CardPanel } from "react-materialize";

class Cardy extends React.Component {
  render() {
    return (
      <CardPanel className="col s6 m4 center" >
        <span className="project-name">{this.props.title}</span>
        {this.props.children}
      </CardPanel>
    );
  }
}

export default Cardy;
