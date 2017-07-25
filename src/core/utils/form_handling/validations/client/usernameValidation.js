import { createError, passed } from './_helpers';
import {
  usernameLenMin,
  usernameLenMax,
  usernamePatternReplace
} from './_constants';

const errorType = 'username-validation';

export const usernameValidation = (formState, fieldName) => {
  const field = formState.fields[fieldName];
  field.value = field.value.replace(usernamePatternReplace, '');
  const value = field.value;

  if (value.length < usernameLenMin || value.length > usernameLenMax) {
    return createError(
      field,
      errorType,
      field.defaultErrorMessage
      || `Username should be between ${usernameLenMin} and ${usernameLenMax} characters.`
    );
  }
  return passed(field);
};
