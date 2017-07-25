import React from 'react';
import { Style } from 'jassy';

import landingParallaxStyles from './styles/landing_parallax_style';

class LandingParallaxBooks extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: landingParallaxStyles()
    };

    this.displayName = 'LandingParallaxBooks';
  }

  render() {
    return (
      <div>
        <Style rules={this.state.styles} />
        <div
          className="landing-parallax-container book-parallax"
          name="parallax-books">
          <div className="landing-parallax-overlay" />
          <div className="landing-parallax-action-container container">
            <h2
              className="landing-parallax-main-text">
              Learn the <span className="attention-dark">
            latest technologies</span> and never worry about falling behind</h2>
            <button
              className="btn-info"
              href="#">
              Browse for Books
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export default LandingParallaxBooks;
