import React from 'react';

import { Style } from 'jassy';
import FormPanel from '/imports/react/components/form/form_panel';
import AuthDescription from './auth_description';
import authStyles from '/imports/react/styles/shared/auth_style';

import {
  doUsernameValidation,
  doPasswordValidation,
  doConfirmPasswordValidation,
  doEmailValidation,
  doNameValidation
} from '/imports/form_handling/validations';

class RegisterView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: authStyles()
    };

    this.displayName = 'RegisterView';
  }

  renderDescriptionList = () => {
    return (
      <ul className="auth-description-list">
        <li>
          <i className="icon ion-ios-bookmarks" />
          amet, consectetur adipisicing elit.
        </li>
        <li>
          <i className="icon ion-android-laptop" />
          Accusamus amet, aperiam, aspernatur at
        </li>
        <li>
          <i className="icon ion-pricetags" />
          culpa cumque delectus dignissimos enim
        </li>
      </ul>
    );
  };

  renderInputFields = () => {
    return [
      {
        fieldName: 'name',
        hideOnFocus: true,
        labelName: 'Your Name *',
        doValidation: [doNameValidation],
        placeholder: 'John Smith',
        required: true
      },
      {
        fieldName: 'email',
        hideOnFocus: true,
        labelName: 'Your Email *',
        doValidation: [doEmailValidation, 'checkEmailExists'],
        placeholder: 'hello@domain.com',
        required: true
      },
      {
        fieldName: 'username',
        hideOnFocus: true,
        labelName: 'Username *',
        doValidation: [doUsernameValidation, 'checkUsernameExists'],
        placeholder: 'Username',
        required: true
      },
      {
        inputType: 'password',
        fieldName: 'password',
        hideOnFocus: true,
        labelName: 'Password *',
        doValidation: [doPasswordValidation],
        placeholder: 'password',
        required: true
      },
      {
        inputType: 'password',
        fieldName: 'confirm',
        hideOnFocus: true,
        labelName: 'Confirm Password *',
        doValidation: [doConfirmPasswordValidation],
        placeholder: 'Confirm Password',
        required: true
      }
    ];
  };

  render() {
    return (
      <div className="auth-view container">
        <Style rules={this.state.styles} />
        <AuthDescription
          authHeader={`Be part of a community that is all about learning new
            technologies.`}
          authDescription={`Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Accusamus amet, aperiam, aspernatur at consequatur culpa
            cumque delectus dignissimos enim exercitationem facilis fugit illum
            itaque iusto labore, optio quaerat sint velit! `}
          authList={this.renderDescriptionList}
        />
        <FormPanel
          inputFields={this.renderInputFields()}
          panelHeaderText="Sign Up"
          titleHeaderText="Let's Get Started"
          titleSubHeaderText="Join a community of technology nerds"
          formErrorMsg="Username/E-Mail and Password combination invalid."
          submitButtonText="Register"
          hasCaptcha={true}
          onSubmitFormName="doAuthRegisterForm"
          formType="register"
        />
      </div>
    );
  }

}

export default RegisterView;
