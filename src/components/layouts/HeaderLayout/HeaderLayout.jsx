import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router';
import { Link as ScrollLink } from 'react-scroll';
import { Style } from 'jassy';

import headerLayoutStyle from './headerLayout.style';

@observer(['LayoutStore'])
class HeaderLayout extends React.Component {

  static displayName = 'HeaderLayout';

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { LayoutStore } = this.props;
    LayoutStore.currentPageName = this.props.displayName || '';
  }

  renderHomeLink = (currentPageName) => {
    if (currentPageName === 'LandingPage') {
      return (
        <ScrollLink
          to="hero"
          smooth={true}
          duration={1500}
          offset={-55}
        >
          <img src="/assets/images/logos/logo.svg" alt="" />
          <span>EverLib</span>
        </ScrollLink>
      );
    } else {
      return (
        <Link to={'/'}>
          <img src="/assets/images/logos/logo.svg" alt="" />
          <span>EverLib</span>
        </Link>
      );
    }
  };

  render() {
    const { LayoutStore } = this.props;
    const profileImg =
      'http://boooya.aqvatarius.com/assets/images/users/user_1.jpg';

    return (
      <header className={LayoutStore.headerContainerClass}>
        <Style rules={headerLayoutStyle()} />
        <div className="header-navicon">
          <ul>
            <li>
              <a href="#"><i className="fa fa-bars" /></a>
            </li>
          </ul>
        </div>
        <div className="header-logo">
          {this.renderHomeLink(LayoutStore.currentPageName)}
        </div>
        <nav className="header-navigation">
          <ul>
            <li className="header-links">
              <ul>
                <li>
                  <ScrollLink
                    to="features"
                    smooth={true}
                    offset={-55}
                    duration={1500}
                  >
                    Features
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="benefits"
                    smooth={true}
                    duration={1500}
                    offset={-55}
                  >
                    Benefits
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="guide"
                    smooth={true}
                    duration={1500}
                    offset={-55}
                  >
                    Quick guide
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="testimonials"
                    smooth={true}
                    duration={1500}
                    offset={-55}
                  >
                    Testimonals
                  </ScrollLink>
                </li>
                <li><Link to={'/register'}>Register</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
              </ul>
            </li>
            <li>
              <div className="header-profile">
                <div className="profile-image">
                  <Link to={'/home'}><img src={profileImg} alt="" /></Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

}

export default HeaderLayout;
