import React from 'react';
import { Style } from 'jassy';

import userSidebarStyles from
  '/imports/react/styles/shared/user_sidebar_style';

class UserSidebarLayout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: userSidebarStyles()
    };

    this.displayName = 'UserSidebarLayout';
  }

  render() {
    return (
      <div>
        <Style rules={this.state.styles} />
        <div className="user-sidebar-layout">
          <div className="user-sidebar-list-container">
            <div>
              <i className="icon ion-android-home" />
              <p>Home</p>
            </div>
            <div>
              <i className="icon ion-ios-book" />
              <p>Library</p>
            </div>
            <div>
              <i className="icon ion-paper-airplane" />
              <p>Publish</p>
            </div>
            <div>
              <i className="icon ion-ios-chatboxes" />
              <p>Messages</p>
            </div>
            <div>
              <i className="icon ion-edit" />
              <p>Notes</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default UserSidebarLayout;
