import { createError, passed } from './_helpers';
import { nameLenMax, nameLenMin } from './_constants';

const errorType = 'name-validation';

export const nameValidation = (formState, fieldName) => {
  const field = formState.fields[fieldName];
  const value = field.value;
  if (!value) {
    return createError(
      field, errorType, field.defaultErrorMessage || 'Name is required.'
    );
  }
  if (value.length < nameLenMin || value.length > nameLenMax) {
    return createError(
      field,
      errorType,
      field.defaultErrorMessage
      || `Name should be between ${nameLenMin} and ${nameLenMax} characters.`
    );
  }
  return passed(field);
};
