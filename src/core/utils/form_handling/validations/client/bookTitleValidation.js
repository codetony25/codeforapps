import { createError, passed } from './_helpers';
import { bookTitleLenMin, bookTitleLenMax } from './_constants';

const errorType = 'book-title-validation';

export const bookTitleValidation = (formState, fieldName) => {
  const field = formState.fields[fieldName];

  const value = field.value;
  if (!value) {
    return createError(
      field, errorType, field.defaultErrorMessage || 'Book title is required.'
    );
  }
  if (value.length < bookTitleLenMin || value.length > bookTitleLenMax) {
    return createError(
      field,
      errorType,
      field.defaultErrorMessage ||
        `Book title should be between ${bookTitleLenMin} and ${bookTitleLenMax} characters.`
    );
  }
  return passed(field);
};
