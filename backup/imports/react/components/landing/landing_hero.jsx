/**
 * landing_hero.jsx
 */
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

import React from 'react';
import { Style } from 'jassy';
import { DirectLink, Element } from 'react-scroll';

import SubscriberForm from '/imports/react/components/form/form_subscriber';
import landingHeroStyles from './styles/landing_hero_style';

class LandingHero extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      styles: landingHeroStyles()
    };

    this.displayName = 'LandingHero';
  }

  render() {
    return (
      <Element name="hero">
        <Style rules={this.state.styles} />
        <div
          className="landing-hero-container"
          style={{height: window.innerHeight}}>
          <div className="landing-hero-video-container">
            <video
              className="landing-hero-video"
              poster="/images/landing-page/typing-macbook.jpg"
              autoPlay
              muted
              loop
            >
              <source
                src="/videos/landing-page/typing-macbook.mp4"
                type="video/mp4"
              />
              <source
                src="/videos/landing-page/typing-macbook.webm"
                type="video/webm"
              />
              <source
                src="/videos/landing-page/typing-macbook.ogv"
                type="video/ogg"
              />
            </video>
            <div className="landing-hero-video-overlay"/>
            <div className="landing-hero-arrow-container">
              <DirectLink
                to="teaser"
                smooth={true}
                offset={this.props.headerHeight}
              >
                <i className="icon ion-ios-arrow-down" />
              </DirectLink>
            </div>
          </div>
          <div className="landing-hero-slogan">
            <h1 className="landing-hero-slogan-text">
              Introducing Interactive Books
            </h1>
            <h2 className="landing-hero-second-slogan">
              When technology innovates, your books should too
            </h2>
            <div className="landing-hero-action-container">
              <SubscriberForm
                successMessage="You will now receive early access information!"
                buttonValue="Get Early Access"
                heroSubscriberFormClassName="hero-subscriber-form"
              />
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default createContainer(() => {
  return {
    user: Meteor.user(),
    headerHeight: Session.get('headerHeight') || 0
  };
}, LandingHero);
