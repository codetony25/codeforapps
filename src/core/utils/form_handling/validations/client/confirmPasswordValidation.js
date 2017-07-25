import { createError, passed } from './_helpers';

const errorType = 'confirm-password-validation';

export const confirmPasswordValidation = (formState, fieldName) => {
  const field = formState.fields[fieldName];
  const value = field.value;
  if (!value || !formState || !formState.fields || !formState.fields.password) {
    return createError(
      field,
      errorType,
      field.defaultErrorMessage || 'Password & Confirm Password are required.'
    );
  }
  if (value !== formState.fields.password.value) {
    return createError(
      field, errorType, field.defaultErrorMessage || 'Passwords do not match.'
    );
  }
  return passed(field);
};
