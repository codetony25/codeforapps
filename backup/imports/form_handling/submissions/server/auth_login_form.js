import { Meteor } from 'meteor/meteor';
import {
  doUsernameOrEmailValidation,
  doRequiredValidation
} from '/imports/form_handling/validations';

Meteor.methods({
  'doAuthLoginForm': function(formState) {

    Meteor.call(
      'doAllValidations',
      [
        {
          validation: doUsernameOrEmailValidation,
          fieldName: 'identification'
        }, {
          validation: doRequiredValidation,
          fieldName: 'password'
        }
      ],
      formState
    );
    
  }

});