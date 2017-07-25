/**
 * TODO:
 *  Before, server-side validations were done using Meteor methods. From here on, those server-side
 *  validations, like checkUsernameExists, will be done using async calls to the REST API. They will
 *  also need to be checked again on the server-side when the form is submitted.
 */


// import { Meteor } from 'meteor/meteor';
//
// Meteor.methods({
//
//
//
//   'checkEmailExists': function(formState, fieldName) {
//     const email = formState.fields[fieldName].value;
//     if (Meteor.users.find({emails: { $elemMatch: { address: email } } }).count()) {
//       throw new Meteor.Error('email', 'E-Mail already exists.');
//     }
//   },
//
//   'checkBookTitleExists': function(formState, fieldName) {
//     console.log('Don\'t forget to implement checking if the book title exists for this user.');
//   },
//
//   'recaptchaValidation': function(formState) {
//     const secret = "6LfqWCITAAAAAEo6QGzLIQrdcjzVLsFAM9sXJDb_";
//     let res = Meteor.http.call(
//       'POST',
//       'https://www.google.com/recaptcha/api/siteverify',
//       {
//         params: {
//           secret,
//           response: formState.recaptchaToken
//         }
//       }
//     );
//
//     if (!res || !res.data || !res.data.success) {
//       throw new Meteor.Error('recaptcha', 'You are clearly a robot.');
//     }
//   },
//
//   /**
//    * Set up a meteor method to run through all validations
//    */
//   'doAllValidations': function(validations, formState) {
//     validations.forEach(v => {
//       if (typeof v.validation == 'function') {
//         let field = v.validation(formState, v.fieldName);
//         if (field.reason) {
//           throw new Meteor.Error(field.fieldName, field.reason);
//         }
//       }
//       if (typeof v.validation == 'string') {
//         Meteor.call(v.validation, formState, v.fieldName);
//       }
//     });
//   }
//
// });