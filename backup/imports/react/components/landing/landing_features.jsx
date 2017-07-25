/**
 * Landing Feature
 */
import React from 'react';
import { Element } from 'react-scroll';
import { Style } from 'jassy';

import landingFeaturesStyles from './styles/landing_features_style';

class LandingFeatures extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      styles: landingFeaturesStyles()
    };

    this.displayName = 'LandingFeatures';
  }

  render() {
    return (
      <Element name="features">
        <Style rules={this.state.styles} />
        <div className="landing-features-container">
          <div className="container">
            <div>
              <h2 className="title">
                The <span className="title-bold">Key Features</span> of EverLib
              </h2>
              <h5 className="landing-features-sub-title">
                Start creating content for other coders and change the world for the better
              </h5>
            </div>
            <div className="landing-features-key-container">
              <div className="landing-features-section-container">
                <div className="landing-features-section">
                  <h2>Push Notification</h2>
                  <h5>Receive push
                    notifications on your updated books! Receive push notifications on your books!
                  </h5>
                </div>
                <div className="landing-features-section">
                  <h2>Open Community</h2>
                  <h5>consectetur A
                    adipisci aut commodi culpa ducimus, Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.</h5>
                </div>
              </div>
              <div className="landing-features-image-container">
                <img src="/images/landing-page/macbook.png" alt="" />
              </div>
              <div className="landing-features-section-container">
                <div className="landing-features-section">
                  <h2>Keep Track of Books</h2>
                  <h5>Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. consectetur A adipisci aut commodi</h5>
                </div>
                <div className="landing-features-section">
                  <h2>Learn New Technology</h2>
                  <h5>adipisicing elit.
                    consectetur A adipisci aut commodi culpa ducimus, Lorem ipsum dolor sit amet,
                    consectetur</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    )
  }

}

export default LandingFeatures;
