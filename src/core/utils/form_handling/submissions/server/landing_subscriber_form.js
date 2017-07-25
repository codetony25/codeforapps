import { Meteor } from 'meteor/meteor';
import {
  doEmailValidation,
} from '/imports/form_handling/validations';

Meteor.methods({
  'doLandingSubscriberForm': function(formState) {

    Meteor.call(
      'doAllValidations',
      [
        {
          validation: doEmailValidation,
          fieldName: 'email'
        }
      ],
      formState
    );

    Meteor.call('subscribers.insert', formState.fields.email.value);
  }

});