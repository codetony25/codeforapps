import React from 'react';
import { Style } from 'jassy';

import parallaxLandingStyle from './parallaxLanding.style';

class ParallaxLanding extends React.Component {

  static displayName = 'ParallaxLanding';

  render() {
    return (
      <div
        className="parallax-container author-parallax"
        name="parallax-authors"
      >
        <Style rules={parallaxLandingStyle()} />
        <div className="parallax-overlay" />
        <div className="parallax-action-container container">
          <h2 className="parallax-main-text">Become an
            <span className="attention-dark"> author </span>
            and share your knowledge with the world
          </h2>
          <div className="parallax-actions">
            <button className="btn-info">Register</button>
            <button className="btn-success btn-outline">
              Learn More
              <i className="icon ion-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export default ParallaxLanding;
