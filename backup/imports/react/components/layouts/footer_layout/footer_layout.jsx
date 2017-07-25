/**
 * footer_layout.jsx
 *
 * Generates a FooterLayout component
 * This could be a stateless component, but we want to use refs
 * which can't be used in stateless components. All this component
 * should do is handle it's own state, events and rendering.
 *
 * It uses a local collection, SubscriberState, for handling global
 * SubscriberState. It should never create, update, or delete global
 * state. SubscriberActions handle that. Both the state and actions
 * are mapped to props.
 */

import React from 'react';
import { Link } from 'react-router';
import { Style } from 'jassy';

import SubscriberForm from '/imports/react/components/form/form_subscriber';
import { FooterLinks } from '/imports/react/links/link_config';
import { renderLinks } from '/imports/react/links/link_helpers';
import footerLayoutStyles from './footer_style';

class FooterLayout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: footerLayoutStyles()
    };

    this.displayName = 'FooterLayout';
  }

  render() {
    return (
      <footer>
        <Style rules={this.state.styles} />
        <div className="footer-layout">
          <div className="footer-support">
            <h1>
              We are always here to guide you to the best learning experience.
            </h1>
            <Link to={'/contact'} className="btn-info btn-small">
              Contact Us
            </Link>
          </div>
          <div className="footer-site">
            <div className="footer-navigation-container">
              <div className="footer-subscribe-container">
                <h4>Join 100,000 of authors and readers</h4>
                <p>Subscribe or learn more about EverLib</p>
                <div>
                  <SubscriberForm
                    footerSubscriberFormClassName="footer-subscriber-form" />
                </div>
              </div>
              <div>
                <h3>
                  <span>Getting Started</span>
                </h3>
                <ul>
                  {renderLinks(FooterLinks.gettingStartedLinks)}
                </ul>
              </div>
              <div>
                <h3>
                  <span>Community</span>
                </h3>
                <ul>
                  {renderLinks(FooterLinks.communityLinks)}
                </ul>
              </div>
              <div>
                <h3>
                  <span>EverLib</span>
                </h3>
                <ul>
                  {renderLinks(FooterLinks.companyLinks)}
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-terms-container">
            <h5>
              &copy; Copyright 2016 EverLib, All Rights Reserved
            </h5>
          </div>
        </div>
      </footer>
    );
  }
  
}

export default FooterLayout;
