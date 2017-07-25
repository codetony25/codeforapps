import React from 'react';

import BenefitLanding from './BenefitLanding';
import FeatureLanding from './FeatureLanding';
import HeroLanding from './HeroLanding';
import ParallaxLanding from './ParallaxLanding';
import TeaserLanding from './TeaserLanding';
import TestimonialLanding from './TestimonialLanding';
import QuickGuideLanding from './QuickGuideLanding';

class LandingPage extends React.Component {

  static displayName = 'LandingPage';
  static metaTitle = 'EverLib Landing | Introducing Everlib';
  static metaDescription = 'Welcome to EverLib, where we are always learning';

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing-container">
        <HeroLanding />
        <TeaserLanding />
        <QuickGuideLanding />
        <ParallaxLanding />
        <FeatureLanding />
        <BenefitLanding />
        <ParallaxLanding />
        <TestimonialLanding />
      </div>
    );
  }

}

export default LandingPage;
