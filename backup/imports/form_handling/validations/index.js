/**
 * Validations
 *
 * This file ensure that validation standards are the same across all
 * implementations of the site. If called within a meteor method, if
 * the validation does not pass, it will stop execution immediately and
 * return from the meteor method with an error. To grab the reason within
 * a meteor method, grab error.reason from within the callback.
 *
 * If this is being called from the client, we're going to return an object:
 * Example passed:
 *  { value: sameAsPassedIn, errorType: '', reason: '' }
 * Example failed:
 *  { value: sameAsPassedIn, errorType: 'email-validation', reason: 'Please enter a valid E-Mail.' }
 *
 * @params valueToBeValidated, optionalMessageString
 */

import { Meteor } from 'meteor/meteor';

const createError = (field, errorType, reason) => {
  if (Meteor.isServer) {
    throw new Meteor.Error(errorType, reason);
  }
  if (Meteor.isClient) {
    field.errorType = errorType;
    field.reason = reason;
    return field;
  }
};

// Strips off the errors
const passed = (field) => {
  field.errorType = '';
  field.reason = '';
  return field;
};

export const doRequiredValidation = (formState, fieldName) => {
  const errorType = 'required-validation';
  const field = formState.fields[fieldName];
  if (!field.value) {
    return createError(field, errorType, field.defaultErrorMessage || 'This field is required.');
  }
  return passed(field);

};

export const doEmailValidation = (formState, fieldName) => {
  const errorType = 'email-validation';
  const field = formState.fields[fieldName];
  field.value = field.value.replace(/ /g, '');
  const value = field.value;
  if (!value || !value.match(/.+@.+\..+/)) {
    return createError(field, errorType, field.defaultErrorMessage || 'Please enter a valid E-Mail.');
  }
  if (value.length > 50) {
    return createError(field, errorType, field.defaultErrorMessage || 'E-Mail should be less than 50 characters.');
  }
  return passed(field);
};

export const doUsernameValidation = (formState, fieldName) => {
  const errorType = 'username-validation';
  const field = formState.fields[fieldName];
  field.value = field.value.replace(/[^a-zA-Z0-9_]/gi,'');
  const value = field.value;

  if (!value && field.required) {
    return createError(field, errorType, field.defaultErrorMessage || 'Username is required.');
  }
  if (value.length < 2 || value.length > 20) {
    return createError(field, errorType, field.defaultErrorMessage || 'Username should be between 2 and 20 characters.');
  }
  return passed(field);
};

export const doMessageValidation = (formState, fieldName) => {
  const errorType = 'message-validation';
  const field = formState.fields[fieldName];
  const value = field.value;
  if (value.length < 10 || value.length > 500) {
    return createError(field, errorType, field.defaultErrorMessage || 'Message should be between 10 and 500 characters.');
  }
  return passed(field);
};

export const doNameValidation = (formState, fieldName) => {
  const errorType = 'name-validation';
  const field = formState.fields[fieldName];
  const value = field.value;
  if (!value) {
    return createError(field, errorType, field.defaultErrorMessage || 'Name is required.');
  }
  if (value.length < 2 || value.length > 50) {
    return createError(field, errorType, field.defaultErrorMessage || 'Name should be between 2 and 50 characters.');
  }
  return passed(field);
};

export const doPasswordValidation = (formState, fieldName) => {
  const errorType = 'password-validation';
  const field = formState.fields[fieldName];
  const value = field.value;
  if (!value) {
    return createError(field, errorType, field.defaultErrorMessage || 'Password is required.');
  }
  if (value.length < 6 || value.length > 50) {
    return createError(field, errorType, field.defaultErrorMessage || 'Password should be between 6 and 50 characters.');
  }
  return passed(field);
};

export const doConfirmPasswordValidation = (formState, fieldName) => {
  const errorType = 'confirm-password-validation';
  const field = formState.fields[fieldName];
  const value = field.value;
  if (!value || !formState || !formState.fields || !formState.fields.password) {
    return createError(field, errorType, field.defaultErrorMessage || 'Password & Confirm Password are required.');
  }
  if (value !== formState.fields.password.value) {
    return createError(field, errorType, field.defaultErrorMessage || 'Passwords do not match.');
  }
  return passed(field);
};

export const doUsernameOrEmailValidation = (formState, fieldName) => {
  const errorType = 'username-or-email-validation';
  const field = formState.fields[fieldName];
  // Neither field should contain spaces, don't let the user enter them
  field.value = field.value.replace(/ /g, '');
  const value = field.value;

  // Working with E-Mail
  if (value.includes('@')) {
    if (!value || !value.match(/.+@.+\..+/)) {
      return createError(field, errorType, field.defaultErrorMessage || 'Not a valid Username or E-Mail.');
    }
    if (value.length > 50) {
      return createError(field, errorType, field.defaultErrorMessage || 'Not a valid Username or E-Mail.');
    }
  } else {
    if (!value && field.required) {
      return createError(field, errorType, field.defaultErrorMessage || 'Username or E-Mail is required.');
    }
    if (value.length < 2 || value.length > 20) {
      return createError(field, errorType, field.defaultErrorMessage || 'Not a valid Username or E-Mail.');
    }
  }
  return passed(field);
};

export const doBookTitleValidation = (formState, fieldName) => {
  const errorType = 'book-title-validation';
  const field = formState.fields[fieldName];
  
  const value = field.value;
  if (!value) {
    return createError(field, errorType, field.defaultErrorMessage || 'Book title is required.');
  }
  if (value.length < 2 || value.length > 50) {
    return createError(field, errorType, field.defaultErrorMessage || 'Book title should be between 2 and 50 characters.');
  }
  return passed(field);
};

export const doBookDescriptionValidation = (formState, fieldName) => {
  const errorType = 'description-validation';
  const field = formState.fields[fieldName];
  const value = field.value;
  if (value.length < 20 || value.length > 1000) {
    return createError(field, errorType, field.defaultErrorMessage || 'Book description should be between 20 and 1000 characters.');
  }
  return passed(field);
};