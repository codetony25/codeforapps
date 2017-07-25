import { Meteor } from 'meteor/meteor';
import {
  doEmailValidation,
  doMessageValidation
} from '/imports/form_handling/validations';

Meteor.methods({
  'doContactMessageForm': function(formState) {

    Meteor.call(
      'doAllValidations',
      [
        {
          validation: doEmailValidation,
          fieldName: 'email'
        }, {
          validation: doMessageValidation,
          fieldName: 'message'
        }
      ],
      formState
    );

    Meteor.call('createContactMessage', formState.fields.email.value, formState.fields.message.value);

  }

});