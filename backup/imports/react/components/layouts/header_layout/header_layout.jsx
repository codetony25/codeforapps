import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';
import { renderLinks } from '/imports/react/links/link_helpers';

import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import { Style } from 'jassy';

import headerLayoutStyles from './header_style';

class HeaderLayout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: headerLayoutStyles({
        applyHeaderBackground: !this.props.route.isLandingPage
      })
    };

    this.displayName = 'HeaderLayout';
    this.calculatedHeightToTransition = 76;
  }

  componentDidMount() {
    this.handleMountedOrReceivedPropsScrollStyles(
      this.props.route.isLandingPage
    );
  }

  componentWillReceiveProps(nextProps)  {
    this.handleMountedOrReceivedPropsScrollStyles(
      nextProps.route.isLandingPage
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.route.isLandingPage !== this.props.route.isLandingPage) ||
      (nextState.styles !== this.state.styles);
  }

  componentWillUnmount()  {
    window.removeEventListener('scroll', this.handleScrollStyles);
  }

  /**
   * This function is attached as the scroll listener, it will wait till it
   * reaches the calcuated scroll position to start the transition for us.
   *
   * Attached to the styles state is the modified header styles depending
   * on what options are passed to it.
   */
  handleScrollStyles = () => {
    if (window.scrollY >= this.calculatedHeightToTransition) {
      this.setState({
        styles: headerLayoutStyles({ applyHeaderBackground: true })
      });
    } else if (window.scrollY <= this.calculatedHeightToTransition) {
      this.setState({
        styles: headerLayoutStyles({ applyHeaderBackground: false })
      });
    }
  };

  /**
   * During initialization, this component will attach the scroll handler
   * and it will remove it once the page isn't the landing page, if it isn't
   * the styles page the none transitioning header is applied.
   *
   * @param isLandingPage
   */
  handleMountedOrReceivedPropsScrollStyles = (isLandingPage) => {
    if (isLandingPage &&
      window.scrollY <= this.calculatedHeightToTransition) {
      window.addEventListener('scroll', this.handleScrollStyles);
      this.setState({
        styles: headerLayoutStyles({ applyHeaderBackground: false })
      });
    } else if (isLandingPage &&
      window.scrollY >= this.calculatedHeightToTransition) {
      window.addEventListener('scroll', this.handleScrollStyles);
      this.setState({
        styles: headerLayoutStyles({ applyHeaderBackground: true })
      });
    } else {
      window.removeEventListener('scroll', this.handleScrollStyles);
      this.setState({
        styles: headerLayoutStyles({
          applyHeaderBackground: true,
          disableRouteTransition: this.props.route.isLandingPage
        })
      });
    }
  };

  render() {
    return (
      <header>
        <Style rules={this.state.styles} />
        <div className="header-layout">
          <nav>
            <div className="header-logo-container-mobile">
              <Link key="1" to={'/'}>
                <img src="/images/logos/logo.svg" />
                <span className="logo-text">
                  EverLib
                </span>
              </Link>
            </div>
            <div className="left-navigation">
              <div className="header-logo-container">
                <Link key="1" to={'/'}>
                  <img src="/images/logos/logo.svg" />
                  <span className="logo-text">
                    EverLib
                  </span>
                </Link>
              </div>
              <ul className="context-navigation">
                {renderLinks(this.props.route.links.contextLinks)}
              </ul>
            </div>
            <ul
              className="site-navigation">
              <li key="2" className="search-icon">
                <Link to={'/books'}>
                  <i className="icon ion-ios-search-strong" />
                  browse for books
                </Link>
              </li>
              {renderLinks(this.props.route.links.actionLinks)}
            </ul>
            <div className="header-mobile-navigation-container">
              <ul>
                <li key="3">
                  <a href="#" className="search-icon">
                    <i className="icon ion-ios-search-strong" />
                  </a>
                </li>
                <li key="4">
                  <a
                    onClick={()=>(Session.set('sidebar', true))}
                    className="header-navicon">
                    <i className="navicon-icon-first" />
                    <i className="navicon-icon-second" />
                    <i className="navicon-icon-third" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default createContainer(() => {
  return {
    user: Meteor.user(),
    sidebar: Session.get('sidebar')
  };
}, HeaderLayout);
