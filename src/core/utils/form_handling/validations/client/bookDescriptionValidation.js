import { createError, passed } from './_helpers';
import { bookDescriptionLenMin, bookDescriptionLenMax } from './_constants';

const errorType = 'description-validation';

export const bookDescriptionValidation = (formState, fieldName) => {
  const field = formState.fields[fieldName];
  const value = field.value;
  if (
    value.length < bookDescriptionLenMin || value.length > bookDescriptionLenMax
  ) {
    return createError(
      field,
      errorType,
      field.defaultErrorMessage
      || `Book description should be between ${bookDescriptionLenMin} and ${bookDescriptionLenMax} characters.`
    );
  }
  return passed(field);
};
