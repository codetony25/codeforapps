import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { createContainer } from 'meteor/react-meteor-data';
import { Style } from 'jassy';

import UserSidebarLayout from
  '/imports/react/components/layouts/user_sidebar_layout/user_sidebar_layout';

import React from 'react';

class DashboardView extends React.Component {

  constructor(props) {
    super(props);

    this.displayName = 'DashboardView';
  }

  render() {
    return (
      <div className="dashboard-view">
        <UserSidebarLayout />
        Dashboard view
      </div>
    );
  }

}

export default createContainer((props) => {
  // Get necessary dashboard data
  return {
    data: null
  };
}, DashboardView);
