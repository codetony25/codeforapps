import { Meteor } from 'meteor/meteor';
import SubscriberState from './state';
import { throttle } from 'lodash';

// Let's throttle this bad boy
const throttleDoSubscriberSubmit = throttle((email) => {
  Meteor.call('subscribers.insert', email, (err) => {
    if (err) {
      SubscriberState.update({},{$set: {
        errorMsg: 'Please enter a valid E-Mail.',
        successMsg: ''
      }});
    } else {
      SubscriberState.update({},{$set: {
        errorMsg: '',
        successMsg: 'Thank you for signing up!'
      }});
    }
  });
}, 2000);

export default SubscriberActions = {
  'doSubscriberSubmit': (email) => {
    // Normally we would do the logic here, but since this method is insantiated
    // every time we call doSubscriberSubmit, we can't create the throttler inside.
    // If we have throttled, debounced or other functions that we have to set outside
    // of this scope, let's follow the convention of throttleMethodName, debounceMethodName, etc.
    throttleDoSubscriberSubmit(email);
  }
};