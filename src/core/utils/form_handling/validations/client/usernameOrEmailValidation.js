import { createError, passed } from './_helpers';
import {
  emailPatternReplace,
  emailPatternMatch,
  emailLenMax,
  emailLenMin,
  usernamePatternReplace,
  usernamePatternMatch,
  usernameLenMax,
  usernameLenMin
} from './_constants';

const errorType = 'username-or-email-validation';

export const usernameOrEmailValidation = (formState, fieldName) => {
  const field = formState.fields[fieldName];
  let value = field.value;
  // Only Emails can include the @ symbol.
  const isEmail = value.includes('@');

  if (isEmail) {
    // Working with EMail
    value = value.replace(emailPatternReplace, '');
    if (!value || !value.match(emailPatternMatch)) {
      return createError(
        field,
        errorType,
        field.defaultErrorMessage || 'Not a valid Username or E-Mail.'
      );
    }
    if (value.length > emailLenMax) {
      return createError(
        field,
        errorType,
        field.defaultErrorMessage
        || `E-Mail should be less than ${emailLenMax} characters.`
      );
    }
  } else {
    // Working with Username
    value = value.replace(usernamePatternReplace, '');
    if (value.length < usernameLenMin || value.length > usernameLenMax) {
      return createError(
        field,
        errorType,
        field.defaultErrorMessage
        || `Username should be between ${usernameLenMin} and ${usernameLenMax} characters.`
      );
    }
  }
  return passed(field);
};
