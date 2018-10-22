import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '../../Utils/scroll';
import './ScrollToNext.css';
import Icon from 'react-materialize/lib/Icon';

class ScrollToNext extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    // const { theme: { colorPrimary } } = this.context;
    return (
      <div className="scroll-to-next" onClick={(e) => this.scrollToNext()}>
        <div className="arrow bounce" style={{ color: '#ff652f' }}>
          {/* <div className="scroll-text">Click Me</div> */}
          <i class="fas fa-chevron-up fa-3x"></i>
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

export default ScrollToNext;