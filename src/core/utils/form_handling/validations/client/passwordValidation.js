import { createError, passed } from './_helpers';
import { passwordLenMax, passwordLenMin } from './_constants';

const errorType = 'password-validation';

export const passwordValidation = (formState, fieldName) => {
  const field = formState.fields[fieldName];
  const value = field.value;
  if (!value) {
    return createError(
      field, errorType, field.defaultErrorMessage || 'Password is required.'
    );
  }
  if (value.length < passwordLenMin || value.length > passwordLenMax) {
    return createError(
      field,
      errorType,
      field.defaultErrorMessage
      || `Password should be between ${passwordLenMin} and ${passwordLenMax} characters.`
    );
  }
  return passed(field);
};
