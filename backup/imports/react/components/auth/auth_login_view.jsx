import React from 'react';
import { Style } from 'jassy'
import AuthDescription from './auth_description';
import FormPanel from '/imports/react/components/form/form_panel';
import authStyles from '/imports/react/styles/shared/auth_style';

import {
  doUsernameOrEmailValidation,
  doRequiredValidation
} from '/imports/form_handling/validations';

class LoginView extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      styles: authStyles()
    };

    this.displayName = 'LoginView';
  }
  
  renderDescriptionList = () => {
    return(
      <ul className="auth-description-list">
        <li>
          <i className="icon ion-ios-bookmarks" />
          Want to become an Author? Do these things
        </li>
        <li>
          <i className="icon ion-android-laptop" />
          There are helpful shortcut keys
        </li>
        <li>
          <i className="icon ion-pricetags" />
          Share and Sell your Books!
        </li>
      </ul>
    );
  };

  renderInputFields = () => {
    return [
      {
        fieldName: 'identification',
        hideOnFocus: true,
        labelName: 'Username or E-Mail *',
        doValidation: [doUsernameOrEmailValidation],
        placeholder: 'Username or E-mail',
        required: true
      },
      {
        inputType: 'password',
        fieldName: 'password',
        hideOnFocus: true,
        labelName: 'Your Password *',
        doValidation: [doRequiredValidation],
        placeholder: 'Password',
        required: true
      }
    ];
  };

  render() {
    return (
      <div className="auth-view container">
        <Style rules={this.state.styles} />
        <AuthDescription
          authHeader={'Current News or New Releases:'}
          authDescription={`Here are some random helpful tips! For any help be
          sure to contact us and we will be glad to assist!`}
          authList={this.renderDescriptionList}
        />
        <FormPanel
          inputFields={this.renderInputFields()}
          panelHeaderText="Log In"
          titleHeaderText="Welcome Back!"
          titleSubHeaderText="Lorem ipsum is what i'm going to use"
          formErrorMsg="Username/E-Mail and Password combination invalid."
          submitButtonText="Log In"
          hasCaptcha={false}
          onSubmitFormName="doAuthLoginForm"
          formType="login"
        />
      </div>
    );
  }
  
}

export default LoginView;
