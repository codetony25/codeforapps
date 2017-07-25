import React from 'react';
import { Style } from 'jassy';
import { Element } from 'react-scroll';

import benefitLandingStyle from './benefitLanding.style';

class BenefitLanding extends React.Component {

  static displayName = 'BenefitLanding';

  render() {
    return (
      <Element name="benefits">
        <div className="benefit-container">
          <Style rules={benefitLandingStyle()} />
          <div className="container">
            <div className="benefit-title-container">
              <h2>
                <span>Benefits</span> that EverLib has to offer
              </h2>
              <h5>Never buy out of date books ever again!</h5>
              <p className="description">
                {`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, laudantium nihil officiis quidem quos rem voluptas?
                Ab architecto ducimus illum labore, nostrum porro qui
                voluptate. Ea esse maxime necessitatibus optio`}
              </p>
              <div className="benefit-list-container">
                <ul className="first-list">
                  <li>
                    <i className="icon ion-checkmark" />
                    Awesomeness
                  </li>
                  <li>
                    <i className="icon ion-checkmark" />
                    Books Duh
                  </li>
                  <li>
                    <i className="icon ion-checkmark" />
                    Interactive Books
                  </li>
                </ul>
                <ul className="second-list">
                  <li>
                    <i className="icon ion-checkmark" />
                    Lorem Ipsum
                  </li>
                  <li>
                    <i className="icon ion-checkmark" />
                    Knowledge
                  </li>
                  <li>
                    <i className="icon ion-checkmark" />
                    Who needs school?
                  </li>
                </ul>
              </div>
            </div>
            <div className="benefit-image-container">
              <img src="/assets/images/landing/showcase.png" alt="" />
            </div>
          </div>
        </div>
      </Element>
    );
  }

}

export default BenefitLanding;
