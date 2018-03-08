import React from 'react';
import { Style } from 'jassy';
import { observer } from 'mobx-react';

import {
  ReactiveForm,
  ReactiveButton,
  ReactiveInput,
  ReactiveErrorMessage
} from '../../../core/modules/everlib_react_forms';
import {
  emailValidation
} from '../../../core/utils/form_handling/validations/client';

import SubscriberFormState from './SubscriberForm.state';
import subscriberFormStyle from './subscriberForm.style';

@observer
class SubscriberForm extends React.Component {

  static displayName = 'SubscriberForm';

  constructor(props) {
    super(props);

    this.state = {
      formSuccess: false
    };
  }

  renderSuccessMessage = () => {
    if (this.state.formSuccess) {
      return (
        <div>
          <div className={this.props}>
            <div className="subscriber-form-success">
              <i className="icon ion-checkmark" />
              <h4>
            {/* {this.props.successMessage || "Thank you for subscribing!"} */}
                Thank you for subscribing!
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

  renderForm = () => {
    const { formType } = this.props;

    return (
      <div>
        <div className="subscriber-form">
          <Style rules={subscriberFormStyle()} />
          <div className={`${formType}-subscriber-form`}>
            <ReactiveForm
              onSubmit="doLandingSubscriberForm"
              onSuccess={this.onSuccess}
            >
              <div className="subscriber-form-error-message">
                <ReactiveErrorMessage
                  className="subscriber-form-error"
                  fieldName="form"
                />
                <ReactiveErrorMessage
                  className="subscriber-form-error"
                  fieldName="email"
                />
              </div>
              <div className="subscriber-form-action">
                <ReactiveInput
                  fieldName="email"
                  type="text"
                  className="input-default"
                  placeholder="Enter your E-mail"
                  validations={[emailValidation]}
                />
                <ReactiveButton
                  stage="valid"
                  type="submit"
                  className={SubscriberFormState.getSolidButtonClass(formType)}
                >
                  Subscribe!
                </ReactiveButton>
                <ReactiveButton
                  stage="invalid"
                  type="button"
                  className={SubscriberFormState.getSolidButtonClass(formType)}
                >
                  Subscribe!
                </ReactiveButton>
                <ReactiveButton
                  stage="waiting"
                  type="button"
                  className={SubscriberFormState.getSolidButtonClass(formType)}
                >
                  Subscribe!
                </ReactiveButton>
                <a
                  href="#"
                  className={
                    SubscriberFormState.getOutlineButtonClass(formType)
                  }
                >
                  Learn More
                </a>
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
