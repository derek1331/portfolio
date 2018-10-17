import React from "react";
import "./Card.css";
import Button from "../Button";
import Modal from "../Modal";

class Card extends React.Component {
  state = {
    flip: true
  };

  handleFlip = () => {
    this.setState({
      flip: !this.state.flip
    });
  };
  render() {
    if (this.state.flip) {
      return (
        <div
          onMouseOver={this.handleFlip}
          class="card-panel"
          style={{
            backgroundImage: this.props.bg,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat"
          }}
        />
      );
    } else {
      return (
        <div>
          <div id="modal1" className="modal">
            <div className="modal-content">
              <h4>Modal Header</h4>
              <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
              <a
                href="#!"
                className="modal-close waves-effect waves-green btn-flat"
              >
                Agree
              </a>
            </div>
          </div>{" "}
          <div className="card" onMouseOutCapture={this.handleFlip}>
            <div className="card-content">
              <span className="card-title  grey-text text-darken-4">
                {this.props.title}
                <br />
                {this.props.description}
                <br />
                <a  onClick={this.showModal}
                  class="waves-effect waves-light btn modal-trigger"
                  href="#modal1"
                >
                  Modal
                </a>
              </span>
            </div>
          </div>
        </div>
      );
    }
    // return (

    //   <div class="card-panel" onMouseEnter={this.handleFlip} onMouseLeave={this.handleFlip} style= {flip}>

    //   </div>

    // );
  }
}

export default Card;

// <img src={this.props.img}
