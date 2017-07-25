import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';

import { browserHistory } from 'react-router';

export const doLogin = () => {
  const routeAfterLogin = Session.get('routeAfterLogin');
  if (routeAfterLogin) {
    Session.set('routeAfterLogin', null);
    browserHistory.replace(routeAfterLogin);
  } else {
    browserHistory.replace('/dashboard');
  }
};

// Accounts.onLogin(() => {
//
// });