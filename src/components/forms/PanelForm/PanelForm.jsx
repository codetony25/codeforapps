import React from 'react';
import { Link } from 'react-router';
import { Style } from 'jassy';

import {
  // ReactiveCaptcha,
  ReactiveButton,
  ReactiveSpan,
  ReactiveInput,
  // ReactiveLabel,
  ReactiveErrorMessage,
  ReactiveForm,
  ReactiveTextarea
} from '../../../core/modules/everlib_react_forms';

import panelFormStyle from './panelForm.style';

class PanelForm extends React.Component {

  static displayName = 'PanelForm';

  constructor(props) {
    super(props);
  }

  // onRegisterSuccess = (formState, errorCallback) => {
  //   Meteor.loginWithPassword(
  //     formState.fields.email.value,
  //     formState.fields.password.value,
  //     (err, res) => {
  //       if (err) {
  //         errorCallback(
  //           err,
  //           this.props.formErrorMsg
  //         );
  //       } else {
  //         browserHistory.push('/faq');
  //       }
  //     }
  //   );
  // };

  // onLoginSuccess = (formState, errorCallback) => {
  //   Meteor.loginWithPassword(
  //     formState.fields.identification.value,
  //     formState.fields.password.value,
  //     (err, res) => {
  //       if (err) {
  //         errorCallback(
  //           err, this.props.formErrorMsg
  //         );
  //       } else {
  //         browserHistory.replace('/dashboard');
  //       }
  //     }
  //   );
  // };

  // onContactSuccess = (formState, errorCallback) => {
  //   this.setState({ contactEmail: formState.fields.email.value });
  //   this.setState({ formSuccess: true });
  // };

  renderFormInput = (options) => {
    options.inputType = options.inputType || 'text';

    if (options.inputType === 'text' || options.inputType === 'password') {
      return (
        <div key={options.fieldName} className="input-container">
          <div className="error-msg">
            <ReactiveErrorMessage
              fieldName={options.fieldName}
              hideOnFocus={options.hideOnFocus}
            />
          </div>
          <ReactiveSpan
            fieldName={options.fieldName}
            className="label-default"
          >
            {options.labelName}
          </ReactiveSpan>
          <ReactiveInput
            key={options.placeholder}
            type={options.inputType}
            fieldName={options.fieldName}
            placeholder={options.placeholder}
            className="input-default"
            classNameNeutral=""
            classNameInvalid="input-default error"
            classNameValid=""
            validations={options.doValidation}
            required={options.required}
          />
          <ReactiveSpan stage="invalid" fieldName={options.fieldName}>
            <i className="icon ion-close" />
          </ReactiveSpan>
          <ReactiveSpan stage="valid" fieldName={options.fieldName}>
            <i className="icon ion-checkmark" />
          </ReactiveSpan>
        </div>
      );
    } else if (options.inputType === 'textarea') {
      return (
        <div key={options.labelName} className="input-container">
          <div className="error-msg">
            <ReactiveErrorMessage fieldName={options.fieldName} />
          </div>
          <ReactiveSpan fieldName={options.fieldName} className="label-default">
            {options.labelName}
          </ReactiveSpan>
          <ReactiveTextarea
            className="input-default contact-textarea"
            classNameInvalid="input-default contact-textarea error"
            fieldName={options.fieldName}
            required={options.required}
            validations={options.doValidation}
            placeholder={options.placeholder}
          />
        </div>
      );
    }
  };

  renderFormSubmit = (options) => {
    options.stage = options.stage || 'valid';

    const btnClassName = () => {
      if (options.stage === 'valid') {
        return "btn-info btn-large";
      } else if (options.stage === 'waiting') {
        return "btn-info btn-loading";
      } else if (options.stage === 'invalid') {
        return "btn-disabled";
      }
    };

    return (
      <ReactiveButton
        className={btnClassName()}
        stage={options.stage}
        type="submit"
      >
        {this.props.submitButtonText}
      </ReactiveButton>
    );
  };

  // renderCaptcha = () => {
  //   if (this.props.hasCaptcha) {
  //     return (
  //       <ReactiveCaptcha
  //         className="register-captcha"
  //         align="center"
  //         sitekey="6LfqWCITAAAAADnVlWKjREYYY-jIMAKWhxSMS40N" />
  //     );
  //   }
  // };

  // handleFormType = () => {
  //   if (this.props.formType === 'login') {
  //     return this.onLoginSuccess;
  //   } else if (this.props.formType === 'register') {
  //     return this.onRegisterSuccess;
  //   } else if (this.props.formType === 'contact') {
  //     return this.onContactSuccess;
  //   }
  // };

  render() {
    return (
      <div className="panel-form-container panel">
        <Style rules={panelFormStyle()} />
        <div className="panel-header">
          {this.props.panelHeaderText}
          <i className="header-icon icon ion-person-add" />
        </div>
        <div className="panel-body">
          <div className="title-container">
            <h2>{this.props.titleHeaderText}</h2>
            <p>{this.props.titleSubHeaderText}</p>
          </div>
          <div className="panel-form">
            {/*onSubmit={this.props.onSubmitFormName}*/}
            {/*onSuccess={this.handleFormType()}*/}
            {/* for reactive form below */}
            <ReactiveForm
              hideAllReactiveUntilFirstBlur={true}
            >
              <ReactiveErrorMessage fieldName="form" />
              {this.props.inputFields.map((input) => {
                return this.renderFormInput({
                  inputType: input.inputType,
                  fieldName: input.fieldName,
                  hideOnFocus: input.hideOnFocus,
                  labelName: input.labelName,
                  placeholder: input.placeholder,
                  required: input.required,
                  doValidation: input.doValidation
                });
              })}
              <div className="submit-container">
                {/*{this.renderCaptcha()}*/}
                {this.renderFormSubmit({ stage: 'valid' })}
                {this.renderFormSubmit({ stage: 'waiting' })}
                {this.renderFormSubmit({ stage: 'invalid' })}
              </div>
              <div className="auth-action">
                <Link
                  className="attention-dark"
                  to={'/login'}
                >
                  Already have an account? Log in
                </Link>
              </div>
            </ReactiveForm>
          </div>
        </div>
      </div>
    );
  }

}

export default PanelForm;
