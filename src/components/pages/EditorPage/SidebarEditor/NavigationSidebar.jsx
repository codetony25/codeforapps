import React from 'react';
import { browserHistory } from 'react-router';

class NavigationSidebar extends React.Component {

  static displayName = 'NavigationSidebar';

  constructor(props) {
    super(props);
  }

  render() {
    console.log('Rendering NavigationSidebar');
    return (
      <div className="sidebar-navigation-container">
        <div
          className="book-edit-sidebar-home-icon"
          onClick={() => browserHistory.push(`/book/${this.props.titleSlug}`)}
        >
          <i className="icon ion-android-home" />
          <p>Book Home</p>
        </div>
        <div
          className={
            this.props.active == 'Chapters' &&
            !this.props.settings.isSidebarContentHidden ? "active" : ''
          }
          onClick={() => this.props.show('Chapters')}
        >
          <i className="icon ion-ios-book" />
          <p>Chapters</p>
        </div>
        <div
          className={
            this.props.active == 'Details' &&
            !this.props.settings.isSidebarContentHidden ? "active" : ''
          }
          onClick={() => this.props.show('Details')}
        >
          <i className="icon ion-information-circled" />
          <p>Details</p>
        </div>
        <div
          className={
            this.props.active == 'Images' &&
            !this.props.settings.isSidebarContentHidden ? "active" : ''
          }
          onClick={() => this.props.show('Images')}
        >
          <i className="icon ion-images" />
          <p>Images</p>
        </div>
        <div
          className={
            this.props.active == 'Help' &&
            !this.props.settings.isSidebarContentHidden ? "active" : ''
          }
          onClick={() => this.props.show('Help')}
        >
          <i className="icon ion-help-circled" />
          <p>Help</p>
        </div>
        <div
          className={
            this.props.active == 'Settings' &&
            !this.props.settings.isSidebarContentHidden ? "active" : ''
          }
          onClick={() => this.props.show('Settings')}
        >
          <i className="icon ion-ios-gear" />
          <p>Settings</p>
        </div>
        <div
          className={
            this.props.active == 'Publish' &&
            !this.props.settings.isSidebarContentHidden ? "active" : ''
          }
          onClick={() => this.props.show('Publish')}
        >
          <i className="icon ion-upload" />
          <p>Publish</p>
        </div>

        <div
          className="book-edit-sidebar-toggle"
          onClick={() => this.props.methods.handleSidebarContentToggle()}
        >
          <i className="icon ion-arrow-swap" />
        </div>
      </div>
    );
  }

}

export default NavigationSidebar;
