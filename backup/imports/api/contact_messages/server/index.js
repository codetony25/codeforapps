import { Meteor } from 'meteor/meteor';
import { ContactMessages } from '/imports/api/contact_messages';

Meteor.methods({
  'createContactMessage': (email, message) => {
    ContactMessages.insert({
      email, message
    });
  }
});