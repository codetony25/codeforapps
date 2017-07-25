/**
 * ReactiveSpan shows a span of content if the related field matches one of the types.
 * For instance, if the field is currently invalid, and ReactiveSpan type="invalid" for that fieldName
 * it will show the contents of ReactiveSpan, otherwise it will hide it.
 */

import React from 'react';
import * as H from './_helpers.js';

export const ReactiveSpan = (props, context) => {
  H.checkFieldNameErrors(props, context);

  const field = context.state.fields[props.fieldName];

  const stage = Array.isArray(props.stage) ? props.stage : [props.stage];
  /**
   * invalid type
   */
  if (stage.includes('invalid')) {
    return (!H.shouldHideReactive(props, context) && H.fieldIsInvalidAndTouched(field)) ? (
      <span className={props.className}>{props.children}</span>
    ) : null;
  }

  /**
   * valid type
   */
  if (stage == 'valid') {
    return (!H.shouldHideReactive(props, context) && H.fieldIsValid(field)) ? (
      <span className={props.className}>{props.children}</span>
    ) : null;
  }

  /** Since 'neutral', 'waiting' and no type aren't valid or invalid, we'll show those even if shouldHideReactive is true **/

  /**
   * A reactive span with the waiting type will only be displayed if the form if the form is waiting, despite the fieldName
   */
  if (stage == 'waiting') {
    return (context.state.stage == 'waiting') ? (
      <span className={props.className}>{props.children}</span>
    ) : null;
  }

  /**
   * neutral type (generally means untouched)
   * not valid and not invalid
   */
  if (stage == 'neutral') {
    return (!H.fieldIsValid(field) && !H.fieldIsInvalidAndTouched(field)) ? (
      <span className={props.className}>{props.children}</span>
    ) : null;
  }

  /**
   * For all other types, return the span as is.
   */
  return (
    <span className={props.className}>{props.children}</span>
  );

};

ReactiveSpan.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  stage: React.PropTypes.string,
  hideReactiveUntilFirstBlur: React.PropTypes.bool,
  hideReactiveOnFocus: React.PropTypes.bool
};

ReactiveSpan.contextTypes = {
  state: React.PropTypes.object,
  methods: React.PropTypes.object
};