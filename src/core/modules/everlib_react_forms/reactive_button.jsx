import React from 'react';
import * as H from './_helpers.js';

export const ReactiveButton = (props, context) => {
  const { state, methods } = context;

  /**
   * Stages of a button
   * 1) neutral/invalid: Waiting on the form to be valid
   * 2) waiting: Waiting on a response from the server
   * 3) valid: Form is ready to submit
   */
  const newProps = Object.assign({}, props);

  if (newProps.stage == 'invalid' || newProps.stage == 'neutral') {
    delete newProps.stage;
    return (state.stage == 'invalid' || state.stage == 'neutral') ? (
        <button {...newProps}>
          {newProps.children}
        </button>
      ) : null;
  }

  if (newProps.stage == 'waiting') {
    delete newProps.stage;
    return (state.stage == 'waiting') ? (
      <button {...newProps}>
        {newProps.children}
      </button>
    ) : null;
  }

  if (newProps.stage == 'valid') {
    delete newProps.stage;
    return (state.stage == 'valid') ? (
      <button {...newProps}>
        {newProps.children}
      </button>
    ) : null;
  }
  // Otherwise we have something else, just return it back
  delete newProps.stage;
  return (
    <button {...newProps}>
      {newProps.children}
    </button>
  );

};

ReactiveButton.propTypes = {
  stage: React.PropTypes.string
};

ReactiveButton.contextTypes = {
  state: React.PropTypes.object,
  methods: React.PropTypes.object
};
