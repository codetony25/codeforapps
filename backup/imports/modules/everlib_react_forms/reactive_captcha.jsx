/**
 * ReactiveCaptcha places a Google ReCaptcha widget on the form
 * Needs to be a class since the react-google-captcha package
 * utilizes ref.
 */

import React from 'react';
import * as H from './_helpers.js';
import ReCAPTCHA from 'react-google-recaptcha';

export class ReactiveCaptcha extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  onChange = (value) => {
    this.context.methods.handleRecaptchaChange(value)
  };

  render() {
    return (
      <ReCAPTCHA
        ref="recaptcha"
        {...this.props}
        onChange={this.onChange}
      />
    );
  }
}

ReactiveCaptcha.propTypes = {
  sitekey: React.PropTypes.string.isRequired
};

ReactiveCaptcha.contextTypes = {
  state: React.PropTypes.object,
  methods: React.PropTypes.object
};