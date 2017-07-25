import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

import React from 'react';
import { Style } from 'jassy';

import { renderLinks } from '/imports/react/links/link_helpers';
import { SidebarLinks } from '/imports/react/links/link_config';
import sidebarLayoutStyles from './sidebar_style';

class SidebarLayout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: sidebarLayoutStyles()
    };

    this.displayName = 'SidebarLayout';
  }

  handleSidebarView = () =>
    this.props.sidebar ? { right: 0 } : { right: -300 };

  renderSidebarOverlay = () => {
    if (this.props.sidebar) {
      return (
        <div
          className="sidebar-overlay"
          onClick={()=>Session.set('sidebar', false)} />
      );
    }
  };

  render() {
    return (
      <div onClick={()=>Session.set('sidebar', false)}>
        <Style rules={this.state.styles} />
        {this.renderSidebarOverlay()}
        <div className="sidebar-layout-container"
             style={this.handleSidebarView()}>
          <div>
            <i className="icon ion-close" />
          </div>
          <div>
            <ul
              className="sidebar-link">
              {renderLinks(SidebarLinks.actionLinks, { longTitles: true })}
              <li key="10">
                <div>
                  <h3 className="sidebar-layout-context-header">
                    Quick Navigation
                  </h3>
                </div>
              </li>
              {renderLinks(SidebarLinks.contextLinks)}
              {renderLinks(this.props.route.links.contextLinks)}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default SidebarLayout;
