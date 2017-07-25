import React from 'react';
import { Element } from 'react-scroll';
import { Style } from 'jassy';

import landingTestimonialsStyles from './styles/landing_testimonials_style';

class LandingTestimonials extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: landingTestimonialsStyles()
    };

    this.displayName = 'LandingTestimonials';
  }

  render() {
    return (
      <Element name="testimonials">
        <Style rules={this.state.styles} />
        <div className="landing-testimonial-container">
          <div className="container">
            <div className="landing-testimonial-title-container">
              <h2>
                Our Friendly <span className="title-bold">
                Testimonials</span>
              </h2>
              <h5>
                All we want is for you to be happy, let us know how you feel!
              </h5>
            </div>
            <div className="landing-testimonial-message-container">
              <h5>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolorum iusto minima nihil quisquam
                reiciendis, similique voluptates? Commodi dolore doloremque et numquam odio optio perspiciatis!
                Aspernatur
                illo modi natus"
              </h5>
              <p>
                <span>Tony Nguyen</span> - Junior Front End Developer
              </p>
            </div>
            <div className="landing-testimonial-divider" />
          </div>
        </div>
      </Element>
    );
  }

}

export default LandingTestimonials;
