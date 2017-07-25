import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Notifications } from '/imports/api/notifications';

class NotificationList extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      unreadNotifications: 0
    };

    this.displayName = 'NotificationList';
  }

  renderNotificationsList = () => {
    return props.notifications.map(n => {
      
    });
  };

  render = () => (
    <div className="books-list">
      {this.renderNotificationsList()}
    </div>
  );
  
}

export default createContainer(() => {
  Meteor.subscribe('notifications');
  return { notifications: Notifications.find({}).fetch() };
}, NotificationList);
