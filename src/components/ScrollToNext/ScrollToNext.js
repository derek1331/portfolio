import React, { Component } from "react";
import PropTypes from "prop-types";
import { toElement as scrollToElement } from "../../Utils/scroll";
import "./ScrollToNext.css";
import Button from "../Button";

class ScrollToNext extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    // const { theme: { colorPrimary } } = this.context;
    return (
      <div className="scroll-to-next" onClick={e => this.scrollToNext()}>
        <div className="arrow bounce" style={{ color: "#14a76c" }}>
          {/* <div className="scroll-text">Click Me</div> */}
          <i class="fas fa-chevron-down fa-3x" />
        </div>
      </div>
    );
  }
}

class ScrollButton extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    // const { theme: { colorPrimary } } = this.context;
    return (
      <div className="scroll-to-next header-scroll" onClick={e => this.scrollToNext()}>
        <div className="button">
          <a 
            style={{backgroundColor:"#14a76c"}}
            className="waves-effect waves-light btn">
           View My Work
          </a>
        </div>
      </div>
    );
  }
}

ScrollToNext.propTypes = {
  pageSelector: PropTypes.string
};

ScrollToNext.contextTypes = {
  theme: PropTypes.any
};

export { ScrollToNext, ScrollButton };
