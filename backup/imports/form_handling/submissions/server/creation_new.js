import { Meteor } from 'meteor/meteor';
import {
  doBookTitleValidation
} from '/imports/form_handling/validations';

Meteor.methods({
  'doCreationNewForm': function(formState) {

    Meteor.call(
      'doAllValidations',
      [
        {
          validation: doBookTitleValidation,
          fieldName: 'bookTitle'
        }, {
          validation: 'checkBookTitleExists',
          fieldName: 'bookTitle'
        }
      ],
      formState
    );
    
    // Create the book
    // Meteor.call('createBook', book);
  }

});