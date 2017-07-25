/**
 * This is an example of a Meteor publish method. Right now, the only thing being returned to
 * the client is all users that are online. Also, the only fields being sent back to the client
 * are the profile and settings of each online user. It's important we do that here, to protect
 * from other sensitive data within a user table from being sent to the client.
 *
 * This example includes some empty methods: added, removed, changed. We can do some special
 * things if any of those events happen. For instance, if a new online user is "added" to this
 * subscription, we can send a notification to the client that a "New user has signed on".
 */

import { Meteor } from 'meteor/meteor';
import { Roles } from '/imports/modules/roles';

// Since we want to have access to the same fields every time we subscribe to a user that isn't the
// logged in user, create an options object in one place, that can be used across multiple publish methods
// in this file.
var options = {
  fields: {
    username: 1,
    profile: 1,
    settings: 1,
    roles: 1,
    currentRoomId: 1,
    "status.online": 1,
    "status.idle": 1,
    "services.github.username": 1,
    "services.github.id": 1
  }
};

Meteor.publish("onlineProfiles", function() {
  var handle = Meteor.users.find({"status.online": true}, options);
  handle.observeChanges({
    added: function() {
    },
    removed: function() {
    },
    changed: function() {
    }
  });
  return handle;
});

Meteor.publish("userProfileInfo", function(userId) {
  return Meteor.users.find({_id: userId}, options);
});

Meteor.publish("ownerInfo", function() {
  return Meteor.users.find({_id: this.userId});
});

/**
 * WARNING: Admin only publications!
 * Make sure to check for adminininity
 */
Meteor.publish('allUsers', function(){
  if (Roles.userHasRole(this.userId, 'admin')) {
    return Meteor.users.find({});
  }
});
