import React from "react";
import "./Card.css";
import Button from "../Button";
import ProjectModal from "../Modal";
import { Card, CardTitle } from "react-materialize";

class Cardy extends React.Component {
  render() {
    return (
      <Card className="hoverable"
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
    // return (

    //   <div class="card-panel" onMouseEnter={this.handleFlip} onMouseLeave={this.handleFlip} style= {flip}>

    //   </div>

    // );
  }
}

export default Cardy;

// <img src={this.props.img}
