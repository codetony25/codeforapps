import React from 'react';
import * as H from './_helpers.js';

export const ReactiveErrorMessage = (props, context) => {
  H.checkFieldNameErrors(props, context);

  const field = context.state.fields[props.fieldName];

  if (props.fieldName=='form') {
    return (context.state.errorMessage) ?
      (
        <span {...props}>{context.state.errorMessage}</span>
      ) : null;
  }

  if (H.shouldHideReactive(props, context)) {
    return null;
  }

  if (H.fieldIsInvalid(field)) {
    return (
      <span {...props}>{field.reason}</span>
    );
  }
  return null;
};

ReactiveErrorMessage.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  hideReactiveUntilFirstBlur: React.PropTypes.bool,
  hideReactiveOnFocus: React.PropTypes.bool
};

ReactiveErrorMessage.contextTypes = {
  state: React.PropTypes.object,
  methods: React.PropTypes.object
};