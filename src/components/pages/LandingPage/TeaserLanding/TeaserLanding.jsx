import React from 'react';
import { Style } from 'jassy';
import { Element } from 'react-scroll';

import teaserLandingStyle from './teaserLanding.style';

class TeaserLanding extends React.Component {

  static displayName = 'TeaserLanding';

  render() {
    return (
      <Element name="teaser">
        <div className="teaser-container">
          <Style rules={teaserLandingStyle()} />
          <div className="container">
            <div className="teaser-section">
              <img src="/assets/images/landing/professor.png" alt="" />
              <div className="teaser-details-container">
                <h3>Discover New Authors</h3>
                <p>
                  {`Lorem ipsum dolor sit amet, consectetur adipisicing
                   elit. Beatae culpa nemo nulla sapiente, unde vel!
                   Aspernatur assumenda`}
                </p>
              </div>
            </div>
            <div className="teaser-section">
              <img src="/assets/images/landing/bookshelf.png" alt="" />
              <div className="teaser-details-container">
                <h3>Manage Book Collections</h3>
                <p>
                  {`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci cupiditate doloribus enim et facere, inventore ipsam`}
                </p>
              </div>
            </div>
            <div className="teaser-section">
              <img src="/assets/images/landing/todos.png" alt="" />
              <div  className="teaser-details-container">
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

export default TeaserLanding;
