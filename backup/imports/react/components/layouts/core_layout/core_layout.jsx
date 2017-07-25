import React from 'react';
import { Style } from 'jassy';

import HeaderLayout from
  '/imports/react/components/layouts/header_layout/header_layout';
import FooterLayout from
  '/imports/react/components/layouts/footer_layout/footer_layout';
import SidebarLayout from
  '/imports/react/components/layouts/sidebar_layout/sidebar_layout';
import coreLayoutStyles from './core_layout_style';

class CoreLayout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: coreLayoutStyles()
    };

    this.displayName = 'CoreLayout';
  }

  /**
   * If we got here for some reason without children, replace the route with
   * '/'. (logout is an example of getting here without children). 
   */
  render() {
    if (!this.props || !this.props.children) {
      return null;
    }
    return (
      <div>
        <Style rules={this.state.styles} />
        <div className="main-container">
          <HeaderLayout
            styles={this.state.styles}
            route={this.props.children.props.route} />
          <SidebarLayout route={this.props.children.props.route} />
          <div className="view-container">
            {this.props.children}
          </div>
          <FooterLayout route={this.props.children.props.route} />
        </div>
      </div>
    );
  }
  
}

export default CoreLayout;
