/**
 * Everlib React Form components and helpers
 *
 * Author: Nathan Brady
 * Created: 06/06/2016
 */

import React from 'react';
import * as H from './_helpers';

/**
 * This is our wrapper for the ReactiveForm. It will handle
 * the base case for form events.
 */

export class ReactiveForm extends React.Component {

  static propTypes = {
    onSubmit: React.PropTypes.string,
    hideAllReactiveOnFocus: React.PropTypes.bool,
    hideAllReactiveUntilFirstBlur: React.PropTypes.bool,
    simulateLongResponse: React.PropTypes.number,
    delayAllErrorMessages: React.PropTypes.number
  };

  static childContextTypes = {
    state: React.PropTypes.object,
    methods: React.PropTypes.object
  };

  constructor(props) {
    super(props);

    // Check props for errors and warnings
    if (props.hideAllReactiveOnFocus && props.hideAllReactiveUntilFirstBlur) {
      throw new Error("Cannot set hideAllReactiveOnFocus and hideAllReactiveUntilFirstBlur to true.");
    }
    // Warn about simulation
    if (props.simulateLongResponse) {
      console.warn("Simulating a long response from the server.");
    }

    // Explicitely set boolean props to false, instead of 'falsey' value
    this.state = {
      'stage': 'neutral',
      'hideAllReactiveOnFocus': props.hideAllReactiveOnFocus || false,
      'hideAllReactiveUntilFirstBlur': props.hideAllReactiveUntilFirstBlur || false,
      'delayAllErrorMessages': props.delayAllErrorMessages || 0,
      'errorMessage': '',
      'success': false,
      'fieldNames': [],
      'fields': {},
      'validations': [],
      'recaptchaForm': false,
      'recaptchaToken': '',
      'simulateLongResponse': props.simulateLongResponse || false
    };

    // Set up initial form state
    this.mapFormFieldsToState = (children) => {
      React.Children.forEach(children, (c) => {
        if (React.isValidElement(c)) {
          if (c.type && c.type.name &&
            ["ReactiveInput", "ReactiveTextarea"].includes(c.type.name)) {
            this._createNewFormFieldOnState(c.props);
          }
          if (c.type && c.type.name && c.type.name === "ReactiveCaptcha") {
            this.state.recaptchaForm = true;
          }
          if (c.props.children) {
            this.mapFormFieldsToState(c.props.children);
          }
        }
      });
    };
    this.mapFormFieldsToState(props.children);

  }

  // Attach state and methods that need to be passed to all children
  getChildContext = () => {
    return {
      state: this.state,
      methods: {
        handleChange: this.handleChange,
        handleBlur: this.handleBlur,
        handleFocus: this.handleFocus,
        handleRecaptchaChange: this.handleRecaptchaChange
      }
    };
  };

  // Any method that is called by the constructor and should only
  // be used within the constructor is prefaced with an _
  _createNewFormFieldOnState = (field) => {
    const fields = this.state.fields;
    const fieldNames = this.state.fieldNames;

    // copy the frozen props object
    let obj = {};
    for (let key in field) {
      if (field.hasOwnProperty(key)) {
        obj[key] = field[key];
      }
    }

    // update some defaults
    obj.reason = field.reason || '';
    obj.errorType = field.errorType || '';
    obj.value = field.value || '';
    obj.validations = field.validations || [];
    obj.blurred = field.blurred || true;
    obj.focused = field.focused || false;
    obj.firstBlur = field.firstBlur || false;
    obj.hideReactiveUntilFirstBlur = field.firstBlur || false;
    obj.defaultErrorMessage = field.defaultErrorMessage || '';

    // add the new props object
    fields[field.fieldName] = obj;

    // add the fieldNames to the top list
    fieldNames.push(field.fieldName);
    // add the validations to the top list
    field.validations.forEach(v =>
      this.state.validations.push(v));

    this.state.fields = fields;
    this.state.fieldNames = fieldNames;
  };

  addFieldOrFormError = (err) => {
    if (this.state.fieldNames.includes(err.error)) {
      let fields = this.state.fields;
      fields[err.error].reason = err.reason;
      this.setState({ fields });
    } else {
      this.setState({ errorMessage: err.reason });
    }
  };

  /**
   * Checks whether or not the form is valid
   */
  checkFormStage = () => {
    this.setState({ stage: 'valid' });
    if (this.state.errorMessage) {
      this.setState({ stage: 'invalid' });
    } else {
      this.state.fieldNames.forEach(f => {
        if (H.fieldIsInvalid(this.state.fields[f])) {
          this.setState({ stage: 'invalid' });
        }
      });
    }
    // If form has a recaptcha but no token, it's not ready
    if (this.state.recaptchaForm && !this.state.recaptchaToken) {
      this.setState({ stage: 'invalid' });
    }
  };

  /*******************************************************************************
   * Setting up our local event handlers
   *
   */

  /**
   * For now every ReactiveInput field will flow through this handleChange
   * event handler. This will also process any validation hooks passed in the
   * array of props. Functions passed in will be treated as such, while strings
   * passed in to the array of validations are to be treated as meteor methods.
   *
   * @param fieldName - Name of the field we're targeting
   * @param event - the change event Passed in automatically
   */
  handleChange = (fieldName, event) => {
    // Reset the major form error on any change
    this.setState({ errorMessage: '' });
    let fields = this.state.fields;
    let field = fields[fieldName];
    field.value = event.target.value;
    field.touched = true;

    if (field.validations) {
      field.validations.forEach(v => {
        if (typeof v == 'function') {
          field = v(this.state, fieldName);
        }
      });
    }
    fields[fieldName] = field;
    this.setState({ fields });
    this.checkFormStage();
  };

  handleRecaptchaChange = (recaptchaToken) => {
    this.setState({ recaptchaToken });
    this.checkFormStage();
  };

  handleBlur = (fieldName, event) => {
    const fields = this.state.fields;
    const field = fields[fieldName];
    field.firstBlur = true;
    field.blurred = true;
    field.focused = false;
    fields[fieldName] = field;
    this.setState({ fields });
  };

  handleFocus = (fieldName, event) => {
    const fields = this.state.fields;
    const field = fields[fieldName];
    field.blurred = false;
    field.focused = true;
    fields[fieldName] = field;
    this.setState({ fields });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ stage: 'waiting', errorMessage: '' });
    // TODO: HANDLE FORM SUBMISSION
    // Meteor.call(this.props.onSubmit, this.state, (err, res) => {
    //   if (err) {
    //     this.addFieldOrFormError(err);
    //   } else {
    //     // do the on success stuff
    //     this.props.onSuccess(this.state, (err, defaultMsg = '') => {
    //       if (err) {
    //         this.setState({ errorMessage: defaultMsg || err.reason });
    //       }
    //     });
    //   }
    //   this.checkFormStage();
    // });
  };

  /**
   * If simulateLongResponse is active, this will pause execution of
   * handleFormSubmit
   * @param event
   */
  pauseHandleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ stage: 'waiting' });
    setTimeout(() => this.handleFormSubmit(event),
      this.props.simulateLongResponse);
  };

  render = () => {
    return (
      <form
        onSubmit={(this.props.simulateLongResponse) ? this.pauseHandleFormSubmit : this.handleFormSubmit}>
        {this.props.children}
      </form>
    )
  };
}