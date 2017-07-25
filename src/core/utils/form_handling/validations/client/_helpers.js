/**
 * Helpers for form validations
 */

/**
 * Puts an error on a field
 * @param field
 * @param errorType
 * @param reason
 * @returns {*}
 */
export const createError = (field, errorType, reason) => {
  field.errorType = errorType;
  field.reason = reason;
  return field;
};

/**
 * Clears a form of all errors
 * @param field
 * @returns {*}
 */
export const passed = (field) => {
  field.errorType = '';
  field.reason = '';
  return field;
};
