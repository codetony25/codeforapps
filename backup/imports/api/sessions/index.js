/**
 * Meteor sessions has some limitations. We're going to use Meteor's
 * client-side mini-mongo for session storage instead.
 */

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Sessions = new Mongo.Collection(null);

// Set up initial sessions
if (!Sessions.find({}).count()) {
  Sessions.insert({
    history: []
  });
}

export const setSession = (key, value) => {
  const obj = {};
  obj[key] = value;
  Sessions.update({}, { $set: obj });
};

export const addToHistory = (title, link) => {
  const sessions = Sessions.find({}).fetch()[0];
  if (sessions.history.length &&
    (sessions.history[0].title != title || sessions.history[0].link != link)) {
    sessions.history.push({ title, link });
  }
  // Let's keep the session storage small and limit history to only 5
  if (sessions.history.length > 5) {
    sessions.history.length = 5;
  }
};

export const getHistory = (title, link) => {
  
};