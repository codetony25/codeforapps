import React from 'react';
import { Style } from 'jassy';
import { Element, Link as ScrollLink } from 'react-scroll';

import heroLandingStyle from './heroLanding.style';
import { SubscriberForm } from '../../../forms';

class HeroLanding extends React.Component {

  static displayName = 'HeroLanding';

  render() {
    return (
      <Element name="hero">
        <div className="hero-container">
          <div className="hero-video-container">
            <Style rules={heroLandingStyle()} />
            <video
              className="hero-video"
              poster="/assets/images/landing/typing-macbook.jpg"
              autoPlay={true}
              muted={true}
              loop={true}
            >
              <source
                src="/assets/videos/landing/typing-macbook.mp4"
                type="video/mp4"
              />
              <source
                src="/assets/videos/landing/typing-macbook.webm"
                type="video/webm"
              />
              <source
                src="/assets/videos/landing/typing-macbook.ogv"
                type="video/ogg"
              />
            </video>
            <div className="hero-video-overlay" />
            <div className="hero-arrow-container">
              <ScrollLink
                smooth={true}
                duration={1500}
                offset={-55}
                to="teaser"
              >
                <i className="icon ion-ios-arrow-down" />
              </ScrollLink>
            </div>
          </div>
          <div className="hero-slogan">
            <h1 className="hero-slogan-text">
              Introducing
              <span className="attention-dark"> Interactive </span>
              Books
            </h1>
            <h2 className="hero-second-slogan">
              When technology innovates, your books should too
            </h2>
            <SubscriberForm formType="hero" />
          </div>
        </div>
      </Element>
    );
  }

}

export default HeroLanding;
