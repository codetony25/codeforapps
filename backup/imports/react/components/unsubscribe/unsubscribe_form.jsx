// TODO: For now we will just have an enter an e-mail address to unsubscribe
// TODO: But in the near future this should match a token coming from the link generated in the user's
// TODO: E-mail that brought them here. Just some hash with their E-mail address
import React from 'react';

import {
  ReactiveForm,
  ReactiveButton,
  ReactiveInput,
  ReactiveErrorMessage
} from '/imports/modules/everlib_react_forms';
import {
  doEmailValidation
} from '/imports/form_handling/validations';

class UnsubscribeForm extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      formSuccess: false
    };
  }

  renderSuccessMessage = () => {
    if (this.state.formSuccess) {
      return (
        <div className="subscriber-form-success">
          <i className="icon ion-checkmark" />
          Sorry to see you go!
        </div>
      );
    } else {
      return null;
    }
  };

  onSuccess = (formState, errorCallback) => {
    this.setState({ formSuccess: true });
  };

  renderForm = () => (
    <ReactiveForm
      onSubmit="doUnsubscribeForm"
      onSuccess={this.onSuccess}
    >
      <ReactiveErrorMessage
        className="subscriber-form-error"
        fieldName="form" />
      <ReactiveErrorMessage
        className="subscriber-form-error"
        fieldName="email" />
      <ReactiveInput
        fieldName="email"
        type="text"
        className="subscriber-email-input"
        placeholder="Enter your E-mail"
        validations={[doEmailValidation]}
      />
      <ReactiveButton
        stage="valid"
        type="submit"
        className="btn large btn-info"
      >
        {this.props.buttonValue || "Unsubscribe"}
      </ReactiveButton>
      <ReactiveButton
        stage="invalid"
        type="button"
        className="btn large btn-disabled"
        disabled
      >
        {this.props.buttonValue || "Unsubscribe"}
      </ReactiveButton>
      <ReactiveButton
        stage="waiting"
        type="button"
        className="btn large btn-loading"
      >
        {this.props.buttonValue || "Unsubscribe"}
      </ReactiveButton>
    </ReactiveForm>
  );

  render = () => {
    return (this.state.formSuccess) ?
      this.renderSuccessMessage() : this.renderForm();
  };
  
}

export default UnsubscribeForm;
