import React from "react";
import "./Modal.css";
import { Modal, Button, Icon, T } from "react-materialize";

class ProjectModal extends React.Component {
  render() {
    return (
     
      <Modal
        actions={
          <div>
            <Button
              node="a"
              target="_blank"
              href={this.props.code}
              style={{ backgroundColor: "#14a76c", marginRight: "5px" }}
              className="left"
            >
              View Site
            </Button>
            <Button
              node="a"
              target="_blank"
              href={this.props.code}
              style={{ backgroundColor: "#14a76c" }}
              className="left"
            >
              View Code
            </Button>
            <button style={{color: "#14a76c"}} className="btn waves-effect waves-light btn-flat modal-action modal-close">
              Close
            </button>
          </div>
        }
        fixedFooter
        trigger={<Button className="modal-button">Learn More</Button>}
        style={{ width: "700px",}}
      >
        <img style={{ maxWidth: "100%"}} src={this.props.img} />

        <div className="modal-description">
          <span style={{ fontSize: "1.64rem" }}>{this.props.title}</span>
          <br />
          <span style={{color:"#ff652f"}}>{this.props.tech}</span>
          <hr />
          <span>{this.props.description}</span>
          <br />
        </div>
      </Modal>
      
    );
  }
}

export default ProjectModal;
