import { Meteor } from 'meteor/meteor';
import { Notifications } from '/imports/api/notifications';

// For now use regular function keyword to keep proper
// context to get the logged in userId from 'this'
Meteor.publish('notifications', function(limit = 20)  {
  const { userNotificationIds, bookNotificationIds } = this.user.find({}).fetch();

  // Return notifications for this user where the notification has a userId
  // or a bookId in the array
  return Notifications.find(
    {
      $or: [
        { _userId: { $in: userNotificationIds } },
        { _bookId: { $in: bookNotificationIds } }
      ]
    },
    { limit }
  );
});