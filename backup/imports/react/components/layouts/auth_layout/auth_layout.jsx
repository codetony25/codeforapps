import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import React from 'react';

import { Style } from 'jassy';
import UserHeaderLayout from '/imports/react/components/layouts/user_header_layout/user_header_layout';
import LoginView from '/imports/react/components/auth/auth_login_view';
import authLayoutStyles from './auth_layout_style';

class AuthLayout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: authLayoutStyles()
    };

    this.displayName = 'AuthLayout';
  }

  render() {
    if (this.props.route.auth === 'user' && !this.props.loggedIn) {
      return (
        <LoginView />
      );
    }
    return (
      <div>
        <Style rules={this.state.styles} />
        <div>
          <UserHeaderLayout />
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default createContainer(() => {
  return {
    loggedIn: !!Meteor.user()
  }
}, AuthLayout);
