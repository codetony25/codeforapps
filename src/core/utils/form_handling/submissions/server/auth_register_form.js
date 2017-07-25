import { Meteor } from 'meteor/meteor';
import {
  doUsernameValidation,
  doPasswordValidation,
  doConfirmPasswordValidation,
  doEmailValidation,
  doNameValidation
} from '../../validations';

Meteor.methods({
  'doAuthRegisterForm': function(formState) {

    Meteor.call(
      'doAllValidations',
      [
        {
          validation: doUsernameValidation,
          fieldName: 'username'
        }, {
          validation: doPasswordValidation,
          fieldName: 'password'
        }, {
          validation: doConfirmPasswordValidation,
          fieldName: 'confirm'
        }, {
          validation: doEmailValidation,
          fieldName: 'email'
        }, {
          validation: doNameValidation,
          fieldName: 'name'
        }, {
          validation: 'checkUsernameExists',
          fieldName: 'username'
        }, {
          validation: 'checkEmailExists',
          fieldName: 'email'
        }, {
          validation: 'recaptchaValidation',
        }
      ],
      formState
    );

    const user = {
      username: formState.fields.username.value,
      password: formState.fields.password.value,
      email: formState.fields.email.value,
      name: formState.fields.name.value
    };

    Meteor.call('createUser', user);
  }

});