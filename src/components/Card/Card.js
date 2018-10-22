import React from "react";
import "./Card.css";
import Button from "../Button";
import ProjectModal from "../Modal";
import { Row, Col, CardPanel,CardTitle,Card } from "react-materialize";

class Cardy extends React.Component {
  render() {
    return (
      <Card className="col s4"
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


    // <Col s={12} m={5}>
    //     <CardPanel className="teal lighten-4 black-text">
    //         <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
    //     </CardPanel>
    // </Col>

