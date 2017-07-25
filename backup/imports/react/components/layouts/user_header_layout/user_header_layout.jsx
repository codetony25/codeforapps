import React from 'react';
import { Style } from 'jassy';

import userHeaderStyles from './user_header_style'

class UserHeaderLayout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: userHeaderStyles()
    };

    this.displayName = 'UserHeaderLayout';
  }

  render() {
    return (
      <div>
        <Style rules={this.state.styles} />
        <div className="user-header-layout">
          <div className="user-left-menu">
            <ul>
              <li>
                <a className="header-btn">
                  <i className="icon ion-navicon"/>
                </a>
              </li>
            </ul>
          </div>
          <div className="header-logo-container">
            <a href="#">
              <img src="/images/logos/logo.svg" alt="" />
              <h1>EverLib</h1>
            </a>
          </div>
          <div className="user-right-menu">
            <ul>
              <li>
                <a className="header-btn">
                  <span className="badge mail-badge">3</span>
                  <i className="icon ion-email"/>
                </a>
              </li>
              <li>
                <a className="header-btn">
                  <span className="badge notice-badge">2</span>
                  <i className="icon ion-android-notifications" />
                </a>
              </li>
              <li>
                <a className="avatar">
                  <img src="/images/example/avatar-example.jpg" alt=""/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default UserHeaderLayout;
