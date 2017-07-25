import { Meteor } from 'meteor/meteor';
import { Subscribers } from '/imports/api/subscribers';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'subscribers.insert': (email) => {
    check(email, Match.Where(email => email.match(/.+@.+/)));

    //Insert only if it doesn't exist already
    Subscribers.update(
      { email },
      {$setOnInsert: { email }},
      {upsert: true}
    );
  },
  
  'removeSubscriber': (email) => {
    Subscribers.remove(
      { email }
    )
  }
});