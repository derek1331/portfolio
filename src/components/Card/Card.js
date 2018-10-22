import React from "react";
import "./Card.css";
import Button from "../Button";
import ProjectModal from "../Modal";
import { Card, CardTitle } from "react-materialize";

class Cardy extends React.Component {
  render() {
    return (
      <Card className=""
        header={<CardTitle reveal image={this.props.bg} waves="light" />}
        title={this.props.title}
        reveal={
          <div>
            <h6 className="black-text">{this.props.description}</h6>
            <ProjectModal />
          </div>
        }
      />
    );
  }
}

export default Cardy;

// <img src={this.props.img}
