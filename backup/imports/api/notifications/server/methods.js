import { Meteor } from 'meteor/meteor';
import { Notifications } from '/imports/api/notifications';

Meteor.methods({
  // Creates a notification msg based on a book
  'createBookNotification': function(book, msg) {
    Notifications.insert({
      type: 'book',
      _bookId: book._id,
      msg: msg
    });
  },
  // Creates a notification msg based on a user action
  // Use this.userId to ensure proper user
  'createUserNotification': function(msg) {
    Notifications.insert({
      type: 'user',
      _userId: this.userId,
      msg: msg
    });
  },
  // Creates a notification specific to one user
  'createLocalNotification': function(user, msg) {
    Notifications.insert({
      type: 'local',
      _userId: user._id,
      msg: msg
    });
  },
  // Creates a notification
  'createGlobalNotification': function(msg) {
    Notifications.insert({
      type: 'global',
      msg: msg
    });
  }
});