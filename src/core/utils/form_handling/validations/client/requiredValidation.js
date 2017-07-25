import { createError, passed } from './_helpers';

const errorType = 'required-validation';

export const requiredValidation = (formState, fieldName) => {
  const field = formState.fields[fieldName];
  if (!field.value) {
    return createError(
      field, errorType, field.defaultErrorMessage || 'This field is required.'
    );
  }
  return passed(field);
};
