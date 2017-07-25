import { Meteor } from 'meteor/meteor';
import { Roles } from '/imports/modules/roles.js';

Meteor.methods({

  /**
   * Meteor.methods get called by the client and the server simultaneously
   * when invoked by the client. This allows us to update the client's version
   * of the database immediately - latency compensation. If for whatever reason,
   * the server responds with a different idea of how the database should look,
   * it will take precedence and the changes the client made will be updated.
   *
   * For instance, if there are complex validation calculations, we can insert right
   * away to the client db right away. If validation fails, the client db will be reverted.
   *
   * @param settingName
   * @param value
   */
  "updateSetting": function(settingName, value) {
    var settings;

      // Do some validation before saving the setting
      settings = Meteor.users.findOne({_id: this.userId}).settings || {};
      settings[settingName] = value;
      Meteor.users.update({_id: this.userId}, {$set: {settings: settings}});
  },
  
  "updateRoom": function(roomId) {
    Meteor.users.update({_id: this.userId}, {$set: {currentRoomId: roomId}});
  },
  
  /**
   *
   * @param userId {String}
   */
  "toggleAdmin": function(userId) {
    // Make sure you can't toggle admin on yourself &
    // that you are an admin
    if (userId && userId !== Meteor.userId() && Roles.userHasRole(Meteor.userId(), 'admin')) {
      if (Roles.userHasRole(userId, 'admin')) {
        Roles.removeUserFromRole(userId, 'admin');
      } else {
        Roles.addUsersToRoles(userId, 'admin');
      }
    }
  }

});