import React from 'react';
import { DirectLink } from 'react-scroll';
import { Style } from 'jassy';

import landingParallaxStyles from './styles/landing_parallax_style';

class LandingParallaxAuthors extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: landingParallaxStyles()
    };

    this.displayName = 'LandingParallaxAuthors';
  }

  render() {
    return (
      <div>
        <Style rules={this.state.styles} />
        <div
          className="landing-parallax-container author-parallax"
          name="parallax-authors">
          <div className="landing-parallax-overlay" />
          <div className="landing-parallax-action-container container">
            <h2 className="landing-parallax-main-text">Become an
              <span className="attention-dark"> author </span>
              and share your knowledge with the world</h2>
            <div className="landing-parallax-actions">
              <DirectLink
                to="hero"
                smooth={true}
                className="btn-info">
                Get Early Access
              </DirectLink>
              <button className="btn-success btn-outline">
                Learn More
                <i className="icon ion-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default LandingParallaxAuthors;
