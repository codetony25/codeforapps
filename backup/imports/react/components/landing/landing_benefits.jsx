import React from 'react';
import { Element } from 'react-scroll';
import { Style } from 'jassy';

import landingBenefitsStyles from './styles/landing_benefits_style';

class LandingBenefits extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      styles: landingBenefitsStyles()
    };

    this.displayName = 'LandingBenefits';
  }

  render() {
    return (
      <Element
        id="#benefits"
        name="benefits">
        <Style rules={this.state.styles} />
        <div className="landing-benefits-container">
          <div className="container">
            <div className="landing-benefits-title-container">
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
              <div className="landing-benefits-list-container">
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
            <div className="landing-benefits-image-container">
              <img src="/images/landing-page/showcase.png" alt="" />
            </div>
          </div>
        </div>
      </Element>
    );
  }

}

export default LandingBenefits;
