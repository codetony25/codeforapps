import React from 'react';
import { Style } from 'jassy';
import { Element } from 'react-scroll';

import testimonialLandingStyle from './testimonialLanding.style';

class TestimonialLanding extends React.Component {

  static displayName = 'TestimonialLanding';

  render() {
    return (
      <Element name="testimonials">
        <div className="testimonial-container">
          <Style rules={testimonialLandingStyle()} />
          <div className="container">
            <div className="testimonial-title-container">
              <h2>
                Our Friendly <span className="title-bold">
                Testimonials</span>
              </h2>
              <h5>
                All we want is for you to be happy, let us know how you feel!
              </h5>
            </div>
            <div className="testimonial-message-container">
              <h5>
                {`Hello I the Pokemon API, the first pokemon
                is ${this.props.name}
                and it weighs ${this.props.weight} `}
              </h5>
              <p>
                <span>Tony Nguyen</span> - Junior Front End Developer
              </p>
            </div>
            <div className="testimonial-divider" />
          </div>
        </div>
      </Element>
    );
  }

}

export default TestimonialLanding;
