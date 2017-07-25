/**
 * Subscriber Form
 */
import React from 'react';

import { Style } from 'jassy';
import {
  ReactiveForm,
  ReactiveButton,
  ReactiveInput,
  ReactiveErrorMessage
} from '/imports/modules/everlib_react_forms';
import {
  doEmailValidation
} from '/imports/form_handling/validations';
import formStyles from '/imports/react/components/form/form_style';

class SubscriberForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: formStyles(),
      formSuccess: false
    };
  }

  /**
   * Retrieve the className from props to differentiate component styles
   */
  getComponentClassName = () =>
    this.props.footerSubscriberFormClassName ||
    this.props.heroSubscriberFormClassName;

  renderSuccessMessage = () => {
    if (this.state.formSuccess) {
      return (
        <div>
          <div className={this.getComponentClassName()}>
            <div className="subscriber-form-success">
              <i className="icon ion-checkmark"/>
              <h4>
                {this.props.successMessage || "Thank you for subscribing!"}
              </h4
              >
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  onSuccess = (formState, errorCallback) => {
    this.setState({ formSuccess: true });
  };

  renderLearnMoreBtn = () => {
    if (this.props.footerSubscriberFormClassName) {
      return (
        <a href="#" className="btn-success btn-outline btn-small">
          Learn More
        </a>
      );
    }
  };

  renderActionBtn = () => {
    if (this.props.footerSubscriberFormClassName) {
      return 'btn-passive btn-small';
    } else if (this.props.heroSubscriberFormClassName) {
      return 'btn-info';
    }
  };

  renderForm = () => {
    return (
      <div>
        <Style rules={this.state.styles} />
        <div className="subscriber-form">
          <div className={this.getComponentClassName()}>
            <ReactiveForm
              onSubmit="doLandingSubscriberForm"
              onSuccess={this.onSuccess}
              simulateLongResponse={2000}
            >
              <div className="subscriber-form-error-message">
                <ReactiveErrorMessage
                  className="subscriber-form-error"
                  fieldName="form" />
                <ReactiveErrorMessage
                  className="subscriber-form-error"
                  fieldName="email" />
              </div>
              <div className="subscriber-form-action">
                <ReactiveInput
                  fieldName="email"
                  type="text"
                  className="input-default"
                  placeholder="Enter your E-mail"
                  validations={[doEmailValidation]} />
                <ReactiveButton
                  stage="valid"
                  type="submit"
                  className={this.renderActionBtn()}>
                  {this.props.buttonValue || "Subscribe!"}
                </ReactiveButton>
                <ReactiveButton
                  stage="invalid"
                  type="button"
                  className={this.renderActionBtn()}>
                  {this.props.buttonValue || "Subscribe!"}
                </ReactiveButton>
                <ReactiveButton
                  stage="waiting"
                  type="button"
                  className={`${this.renderActionBtn()} btn-loading`}>
                  {this.props.buttonValue || "Subscribe!"}
                </ReactiveButton>
                {this.renderLearnMoreBtn()}
              </div>
            </ReactiveForm>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (this.state.formSuccess) ?
      this.renderSuccessMessage() : this.renderForm();
  }

}

export default SubscriberForm;
