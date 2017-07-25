/*******************************************************************************
 * Setup some logic helpers
 *
 */

export const fieldIsEmpty = (field) => !field.value;
export const fieldIsRequired = (field) => field.required;
export const fieldIsValid = (field) => !fieldIsInvalid(field);
export const fieldIsInvalid = (field) =>
  ((field.value && (field.errorType || field.reason))
  || (fieldIsEmpty(field) && fieldIsRequired(field)));
export const fieldIsInvalidAndTouched = (field) =>
  (fieldIsInvalid(field) && fieldIsTouched(field));
export const fieldIsNeutral = (field) =>
  (!fieldIsInvalid(field) && !fieldIsValid(field));
export const fieldIsTouched = (field) => field.touched;
export const fieldIsUntouched = (field) => !field.touched;

/*******************************************************************************
 * Some helpers needed across multiple components
 *
 */

/*
Takes the field, props and context of a Reactive component and returns true
If that component should be showing it's Reactivity. This does not
determine whether a component is valid or invalid, rather just if it's reactions
should be displayed.
*/
export const shouldHideReactive = (props, context) => {
  const field = context.state.fields[props.fieldName];
  // Don't show reactions on focus if either of these fields are set
  if ((field.hideReactiveOnFocus || context.state.hideAllReactiveOnFocus) && field.focused) {
    return true;
  }
  // Don't show reactions until first blur if either of these fields are set
  if ((field.hideReactiveUntilFirstBlur || context.state.hideAllReactiveUntilFirstBlur) && !field.firstBlur) {
    return true;
  }
  return false;
};

export const checkFieldNameErrors = (props, context) => {
  const fieldNames = context.state.fieldNames;
  if (props.fieldName != "form" && !fieldNames.includes(props.fieldName)) {
    throw new Error(`fieldName "${props.fieldName}" does not match an input fieldName.`);
  }
};