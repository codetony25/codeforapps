/**
 * Package for maintaining user roles. Inspired by alanning:roles from Meteor
 * atmosphere.
 */

import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

let rolesDb = new Mongo.Collection("roles");

export const Roles = {

};

/**
 * Creates new roles in the roles database.
 * Enforces all roles to lowercase.
 *
 * @param role {String} Name of role to create
 */
Roles.createRole = role => {
  role = role.trim().toLowerCase();
  try {
    if (!rolesDb.findOne({name: role})) {
      return rolesDb.insert({name: role});
    }
  }
  catch (e) {
    throw new Error("Roles: problem inserting role. " + e);
  }
};

/**
 * Deletes a role in the database.
 * Note: Does not remove the role from users
 *
 * @param role {String} Name of role to delete
 */
Roles.deleteRoleByName = role => {
  try {
    return rolesDb.remove({name: role.trim().toLowerCase()});
  }
  catch (e) {
    throw new Error("Roles: problem deleting role. " + e);
  }
};

/**
 * Deletes a role in the database.
 * Note: Does not remove the role from users
 *
 * @param roleId {String} ID of role to delete
 */
Roles.deleteRoleById = roleId => {
  try {
    return rolesDb.remove({name: roleId})
  }
  catch (e) {
    throw new Error("Roles: problem deleting role. " + e);
  }
};

/**
 * Adds user(s) to role(s)
 * @param users {String|Object|Array} A single User object or ID or an array of User objects or User IDs
 * @param roles {String|Array} A role name or an array of row names.
 */
Roles.addUsersToRoles = (users, roles) => {

  if (!Array.isArray(roles)) {
    roles = [roles];
  }
  if (!Array.isArray(users)) {
    users = [users];
  }

  // Clean all the roles
  roles = roles.filter(r=>(typeof r === 'string' && r.trim().length > 0))
    .map(r=>r.trim().toLowerCase());

  // Make sure users is ids
  users = users.map(u => (typeof u === 'object' && u._id && typeof u._id === 'string') ?
    u._id : u).filter(u => typeof u === 'string');

  if (users.length && roles.length) {
    Meteor.users.update({_id: {$in: users}},
      {$addToSet: {roles: {$each: roles}}}, {multi: true});
  }
};

/**
 * Returns true if a user contains the role passed in
 * @param user {Object|String} User Object or User ID
 * @param role {String} Name of the role
 */
Roles.userHasRole = (user, role) => {
  if (!user || !role) {
    return false;
  }
  role = role.trim().toLowerCase();
  if (typeof user === 'object' && user._id) {
    user = user['_id'];
  }
  if (user = Meteor.users.findOne({_id: user})) {
    if (user && user.roles && Array.isArray(user.roles)) {
      return user.roles.indexOf(role) !== -1;
    }
  }
  return false;
};

/**
 * Returns the array of all the user's roles
 * @param user {Object|String} User Object or User ID
 */
Roles.getUserRoles = user => {
  if (typeof user === 'object' && user._id) {
    user = user._id;
  }
  if (typeof user === 'string') {
    let getUser = Meteor.users.findOne({_id: user});
    if (getUser && getUser.roles && Array.isArray(user.roles)) {
      return user.roles;
    }
  }
  return null;
};

/**
 * Removes a user from a role
 * @param user {Object|String} User Object or User ID
 * @param role {String} Name of the role
 */
Roles.removeUserFromRole = (user, role) => {
  if (typeof user === 'object' && user._id) {
    user = user._id;
  }
  if (typeof user === 'string' && typeof role === 'string') {
    Meteor.users.update({_id: user}, {$pull: {roles: role}}, {multi: true});
  }
};