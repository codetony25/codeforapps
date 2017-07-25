import { createError, passed } from './_helpers';
import { messageLenMax, messageLenMin } from './_constants';

const errorType = 'message-validation';

export const messageValidation = (formState, fieldName) => {
  const field = formState.fields[fieldName];
  const value = field.value;
  if (value.length < messageLenMin || value.length > messageLenMax) {
    return createError(
      field,
      errorType,
      field.defaultErrorMessage
      || `Message should be between ${messageLenMin} and ${messageLenMax} characters.`
    );
  }
  return passed(field);
};
