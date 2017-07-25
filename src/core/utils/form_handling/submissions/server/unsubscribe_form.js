import { Meteor } from 'meteor/meteor';
import {
  doEmailValidation,
  doMessageValidation
} from '/imports/form_handling/validations';

Meteor.methods({
  'doUnsubscribeForm': function(formState) {

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

    Meteor.call('removeSubscriber', formState.fields.email.value);
  }

});