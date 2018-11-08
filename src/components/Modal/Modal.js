import React from "react";
import "./Modal.css";
import { Modal, Button, Slider, Slide } from "react-materialize";

class ProjectModal extends React.Component {
  render() {
    return (
      <Modal
        // header='Modal Header'
        fixedFooter
        trigger={<Button className="modal-button">Learn More</Button>}
        style={{ width: "700px" }}
      >
        <img style={{maxWidth:"100%", height:"70%"}} src={this.props.img} />

        <div style={{borderTop: "1px solid rgba(0,0,0,0.1)"}}className="modal-description">
          <span>{this.props.description}</span>
        </div>
      </Modal>
    );
  }
}

export default ProjectModal;
