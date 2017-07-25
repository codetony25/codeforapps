import React from 'react';
import { Style } from 'jassy';

import sidebarLayoutStyle from './SidebarLayout.style';

class SidebarLayout extends React.Component {

  static displayName = 'SidebarLayout';

  constructor(props) {
    super(props);
  }

  handleSidebarView = () => {
    this.props.sidebar ? { right: 0 } : { right: -300 };
  };

  render() {
    return (
      <div>
        <Style rules={sidebarLayoutStyle()} />
        {this.renderSidebarOverlay()}
        <div className="sidebar-layout-container"
             style={this.handleSidebarView()}
        >
          <div>
            <i className="icon ion-close" />
          </div>
          <div>
            <ul className="sidebar-link">
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
              <li key="10">
                <div>
                  <h3 className="sidebar-layout-context-header">
                    Quick Navigation
                  </h3>
                </div>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Benefits</a>
              </li>
              <li>
                <a href="#">Quick Guide</a>
              </li>
              <li>
                <a href="#">Testimonals</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default SidebarLayout;
