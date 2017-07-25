/**
 * A package that provides debugging tools for your Meteor project.
 *
 * Written by Nate Brady (@NateBrady23)
 */

import { Meteor } from 'meteor/meteor';

export const Debug = {

};

/**
 * A console.log for meteor that gives extra information and doesn't
 * run except in development mode. This allows you to leave your debug logs
 * in place even in production.
 */
Debug.log = (calledFrom, ...args) => {
  if (Meteor.isDevelopment) {
    console.log('Debug log called from: ' + calledFrom);
    console.log('Meteor:', Meteor);
    console.log('Current User:', Meteor.user());
    console.log('=====================================');
    args.forEach(a => console.log(a));
  }
};