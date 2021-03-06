import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '../../Utils/scroll';
import './ScrollToPrevious.css';
import Icon from 'react-materialize/lib/Icon';

class ScrollToPrevious extends Component {
  scrollToPrevious() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    // const { theme: { colorPrimary } } = this.context;

    return (
      <div
        className="scroll-to-previous"
        onClick={(e) => this.scrollToPrevious()}
      >
        <div className="arrow bounce" style={{ color: '#14a76c' }}>
        <i class="fas fa-chevron-up fa-3x"></i>
        </div>
      </div>
    );
  }
}

ScrollToPrevious.propTypes = {
  pageSelector: PropTypes.string
};

ScrollToPrevious.contextTypes = {
  theme: PropTypes.any
};

export default ScrollToPrevious;