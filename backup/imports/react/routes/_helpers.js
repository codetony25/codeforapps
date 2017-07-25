import { Session } from 'meteor/session';
import { browserHistory } from 'react-router';

export const Auth = {};

Auth.isLoggedIn = (nextState, replace) => {
  if (!Meteor.user()) {
    // Remember where they were trying to go and take them there after they log in.
    Session.set('routeAfterLogin', nextState.location.pathname);
    replace('/login');
  }
};

Auth.logout = () => {
  Meteor.logout(() => {
    browserHistory.replace('/login');
  });
};