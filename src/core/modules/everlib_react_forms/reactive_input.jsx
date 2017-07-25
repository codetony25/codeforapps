import React from 'react';
import * as H from './_helpers.js';

export const ReactiveInput = (props, context) => {
  const { state, methods } = context;
  let {className, classNameValid, classNameInvalid, classNameNeutral } = props;

  const field = state.fields[props.fieldName];

  // Hide Reactive classes if these settings are true
  if (H.shouldHideReactive(props, context)) {
    classNameValid = '';
    classNameInvalid = '';
  }

  // Set the proper className
  if (H.fieldIsValid(field) && classNameValid) {
    className = classNameValid;
  }
  // So we don't start off invalid on required fields unless they've been changed
  else if (H.fieldIsInvalidAndTouched(field) && classNameInvalid) {
    className = classNameInvalid;
  }
  else if (classNameNeutral) {
    className = classNameNeutral;
  }

  // Make sure to keep all other props, then overwrite the ones we care about
  const newProps = Object.assign(
    {props},
    {
      className: `reactive-input ${className}`,
      placeholder: props.placeholder,
      onChange: methods.handleChange.bind(this, props.fieldName),
      onBlur: methods.handleBlur.bind(this, props.fieldName),
      onFocus: methods.handleFocus.bind(this, props.fieldName),
      type: props.type,
      value: state.fields[props.fieldName].value
    });

  delete newProps.props;
  return (
    <input {...newProps} />
  );
};

ReactiveInput.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  hideReactiveUntilFirstBlur: React.PropTypes.bool,
  hideReactiveOnFocus: React.PropTypes.bool,
  className: React.PropTypes.string,
  classNameValid: React.PropTypes.string,
  classNameInvalid: React.PropTypes.string,
  classNameNeutral: React.PropTypes.string,
  validations: React.PropTypes.array.isRequired
};

ReactiveInput.contextTypes = {
  state: React.PropTypes.object,
  methods: React.PropTypes.object
};
