import React from 'react';
import { Style } from 'jassy';

import LandingBenefits from './landing_benefits';
import LandingFeatures from './landing_features';
import LandingHero from './landing_hero';
import LandingParallaxAuthors from './landing_parallax_authors';
import LandingParallaxBooks from './landing_parallax_books';
import LandingTeaser from './landing_teaser';
import LandingTestimonials from './landing_testimonials';
import LandingWorkflow from './landing_workflow';
import landingViewStyles from './styles/landing_view_style';

class LandingView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: landingViewStyles()
    };

    this.displayName = 'LandingView';
  }

  render() {
    return (
      <div className="landing-view">
        <Style rules={this.state.styles} />
        <LandingHero />
        <LandingTeaser />
        <LandingWorkflow />
        <LandingParallaxBooks />
        <LandingFeatures />
        <LandingBenefits />
        <LandingParallaxAuthors />
        <LandingTestimonials />
      </div>
    );
  }
  
}

export default LandingView;
