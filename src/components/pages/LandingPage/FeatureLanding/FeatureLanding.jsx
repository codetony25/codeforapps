import React from 'react';
import { Style } from 'jassy';
import { Element } from 'react-scroll';

import featureLandingStyle from './featureLanding.style';

class FeatureLanding extends React.Component {

  static displayName = 'FeatureLanding';

  render() {
    return (
      <Element name="features">
        <div className="feature-container">
          <Style rules={featureLandingStyle()} />
          <div className="container">
            <div>
              <h2 className="title">
                The <span className="title-bold">Key Features</span> of EverLib
              </h2>
              <h5 className="feature-sub-title">
                {`Start creating content for other coders and change the world
                for the better`}
              </h5>
            </div>
            <div className="feature-key-container">
              <div className="feature-section-container">
                <div className="feature-section">
                  <h2>Push Notification</h2>
                  <h5>
                    {`Receive push notifications on your updated books! Receive
                     push notifications on your books!`}
                  </h5>
                </div>
                <div className="feature-section">
                  <h2>Open Community</h2>
                  <h5>
                    {`consectetur A adipisci aut commodi culpa ducimus, Lorem
                      ipsum dolor sit amet, consectetur adipisicing elit.`}
                  </h5>
                </div>
              </div>
              <div className="feature-image-container">
                <img src="/assets/images/landing/macbook.png" alt="" />
              </div>
              <div className="feature-section-container">
                <div className="feature-section">
                  <h2>Keep Track of Books</h2>
                  <h5>
                    {`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      consectetur A adipisci aut commodi`}
                  </h5>
                </div>
                <div className="feature-section">
                  <h2>Learn New Technology</h2>
                  <h5>
                    {`adipisicing elit. consectetur A adipisci aut commodi
                     culpa ducimus, Lorem ipsum dolor sit amet, consectetur`}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }

}

export default FeatureLanding;
