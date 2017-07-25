import React from 'react';
import { Style } from 'jassy';
import { Link } from 'react-router';
import { Link as ScrollLink } from 'react-scroll';

import { SubscriberForm } from '../../forms';
import footerLayoutStyle from './footerLayout.style';

class FooterLayout extends React.Component {

  static displayName = 'FooterLayout';

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <footer>
        <Style rules={footerLayoutStyle()} />
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
                <SubscriberForm formType="footer" />
              </div>
              <div>
                <h3><span>Getting Started</span></h3>
                <ul>
                  <li>
                    <ScrollLink
                      to="guide"
                      smooth={true}
                      duration={1500}
                      offset={-55}
                    >
                      quick guide
                    </ScrollLink>
                  </li>
                  <li><a href="#">tutorial</a></li>
                  <li><Link to={'/faq'}>faqs</Link></li>
                </ul>
              </div>
              <div>
                <h3><span>Community</span></h3>
                <ul>
                  <li><a href="#">events</a></li>
                  <li><a href="#">podcasts</a></li>
                </ul>
              </div>
              <div>
                <h3><span>EverLib</span></h3>
                <ul>
                  <li><a href="#">blog</a></li>
                  <li><a href="#">company</a></li>
                  <li><a href="#">services</a></li>
                  <li><a href="#">privacy policy</a></li>
                  <li><a href="#">terms & conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-terms-container">
            <h5>&copy; Copyright 2016 EverLib, All Rights Reserved</h5>
          </div>
        </div>
      </footer>
    );
  }

}

export default FooterLayout;
