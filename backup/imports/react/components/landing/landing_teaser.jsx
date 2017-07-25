/**
 * Landing Teaser
 */
import React from 'react';
import { Element } from 'react-scroll';
import { Style } from 'jassy';

import landingTeaserStyles from './styles/landing_teaser_style';

class LandingTeaser extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      styles: landingTeaserStyles()
    };

    this.displayName = 'LandingTeaser';
  }

  render() {
    return (
      <Element name="teaser">
        <Style rules={this.state.styles} />
        <div className="landing-teaser-container">
          <div className="container">
            <div className="landing-teaser-section">
              <img src="/images/landing-page/professor.png" alt="" />
              <div className="landing-teaser-details-container">
                <h3>Discover New Authors</h3>
                <p>
                  {`Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Beatae culpa nemo nulla sapiente, unde vel! Aspernatur
              assumenda`}
                </p>
              </div>
            </div>
            <div className="landing-teaser-section">
              <img src="/images/landing-page/bookshelf.png" alt="" />
              <div className="landing-teaser-details-container">
                <h3>Manage Book Collections</h3>
                <p>
                  {`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci cupiditate doloribus enim et facere, inventore ipsam`}
                </p>
              </div>
            </div>
            <div className="landing-teaser-section">
              <img src="/images/landing-page/todos.png" alt="" />
              <div  className="landing-teaser-details-container">
                <h3>Always keep up to date</h3>
                <p>
                  {`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Beatae culpa nemo nulla sapiente, unde vel! Aspernatur assumenda`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
  
}

export default LandingTeaser;
