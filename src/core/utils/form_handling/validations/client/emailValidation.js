import { createError, passed } from './_helpers';
import {
  emailLenMax,
  emailPatternMatch,
  emailPatternReplace
} from './_constants';

const errorType = 'email-validation';

export const emailValidation = (formState, fieldName) => {
  const field = formState.fields[fieldName];
  field.value = field.value.replace(emailPatternReplace, '');
  const value = field.value;
  if (!value || !value.match(emailPatternMatch)) {
    return createError(
      field,
      errorType,
      field.defaultErrorMessage || 'Please enter a valid E-Mail.'
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
  return passed(field);
};
