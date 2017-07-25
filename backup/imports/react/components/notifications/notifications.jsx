import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Notifications } from '/imports/api/notifications'

class Notifications extends React.Component {
  
  constructor(props) {
    super(props);

    this.displayName = 'Notifications';
  }

  render = () => (
    <div className="notifications">
      Notifications
    </div>
  );

}

export default createContainer((props) => {
  Meteor.subscribe('notifications');
  return { notifications: Notifications.find({}) };
}, Notifications);
