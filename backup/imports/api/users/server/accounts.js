/**
 * Here we will update profile information once a user is created, such
 * that there is consistency for the profile object among different services
 */
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser(function(options, user) {

  /**
   * PROFILES
   *
   * Setting up a profile picture url and other default profile information
   */

  // Copy profile options if they exist
  user.profile = {};
  // If there are profile options already set up
  if (options.profile) {
    user.profile = options.profile;
  }

  // Profile Images:
  // For github users
  if (user.services && user.services.github) {
    user.profile.image = "https://avatars.githubusercontent.com/u/" + user.services.github.id;
  }
  // For default images matching the first letter of the profile name
  else if (user.profile && user.profile.name && (/[a-zA-Z]/).test(user.profile.name[0])) {
    user.profile.image = "/images/defaults/" + user.profile.name[0].toLocaleLowerCase() + ".png";
  }
  // Some default image if no other image was set
  else {
    user.profile.image = "/images/defaults/default.png";
  }

  // Profile Names:
  // If there's no name in the profile, set the name equal to the username
  if (!user.profile.name) {
    user.profile.name = user.username;
  }

  /**
   * SETTINGS
   *
   * Some default settings
   */
  user.settings = {
    
  };

  /**
   * ROLES
   *
   * This is an array that holds all the user roles, like 'admin', 'sysadmin', 'user', etc
   * Add the user roll to all users
   */
  if (user.roles && Array.isArray(user.roles) && !user.roles.includes('user')) {
    user.roles.push('user');
  } else {
    user.roles = ['user'];
  }

  // Return the user to be inserted into the DB
  return user;
});