import React from 'react';
import { Style } from 'jassy';

import { PanelForm } from '../../forms';
import { DescriptionAuthBlock } from '../../blocks';
import {
  usernameValidation,
  passwordValidation,
  confirmPasswordValidation,
  usernameOrEmailValidation,
  emailValidation,
  requiredValidation,
  nameValidation
} from '../../../core/utils/form_handling/validations/client';
import { flexDeadCenterPadding } from '../../../styles/shared/mixin.style';

const authPageStyle = {
  '.auth-view': {
    mixin: flexDeadCenterPadding(),
    '&.container': {
      paddingTop: 120
    }
  }
};

class AuthPage extends React.Component {

  static displayName = 'AuthPage';
  static metaTitle = 'Authentication Page';
  static metaDescription = 'Sign in to view our book collection now!';

  constructor(props) {
    super(props);
  }

  renderRegisterListItems = [
    { listItem: 'amet, consectetur adipisicing elit.' },
    { listItem: 'Accusamus amet, aperiam, aspernatur at' },
    { listItem: 'culpa cumque delectus dignissimos enim' }
  ];

  renderLoginListItems = [
    { listItem: 'Want to become an Author? Do these things' },
    { listItem: 'There are helpful shortcut keys' },
    { listItem: 'Share and Sell your Books!' }
  ];

  renderRegisterInputFields = [
    {
      fieldName: 'name',
      hideOnFocus: true,
      labelName: 'Your Name *',
      doValidation: [nameValidation],
      placeholder: 'John Smith',
      required: true
    },
    {
      fieldName: 'email',
      hideOnFocus: true,
      labelName: 'Your Email *',
      doValidation: [emailValidation, 'checkEmailExists'],
      placeholder: 'hello@domain.com',
      required: true
    },
    {
      fieldName: 'username',
      hideOnFocus: true,
      labelName: 'Username *',
      doValidation: [usernameValidation, 'checkUsernameExists'],
      placeholder: 'Username',
      required: true
    },
    {
      inputType: 'password',
      fieldName: 'password',
      hideOnFocus: true,
      labelName: 'Password *',
      doValidation: [passwordValidation],
      placeholder: 'password',
      required: true
    },
    {
      inputType: 'password',
      fieldName: 'confirm',
      hideOnFocus: true,
      labelName: 'Confirm Password *',
      doValidation: [confirmPasswordValidation],
      placeholder: 'Confirm Password',
      required: true
    }
  ];

  renderLoginInputFields = [
    {
      fieldName: 'identification',
      hideOnFocus: true,
      labelName: 'Username or E-Mail *',
      doValidation: [usernameOrEmailValidation],
      placeholder: 'Username or E-mail',
      required: true
    },
    {
      inputType: 'password',
      fieldName: 'password',
      hideOnFocus: true,
      labelName: 'Your Password *',
      doValidation: [requiredValidation],
      placeholder: 'Password',
      required: true
    }
  ];

  renderDescriptionAuthBlock = (isRegister, isLogin) => {
    if (!isLogin) {
      return (
        <DescriptionAuthBlock
          authHeader={`Be part of a community that is all about learning
                new technologies.`}
          authDescription={`Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Accusamus amet, aperiam, aspernatur at
                consequatur culpa cumque delectus dignissimos enim
                exercitationem facilis fugit illum itaque iusto labore, optio
                quaerat sint velit! `}
          authList={
            isRegister ?
              this.renderRegisterListItems : this.renderLoginListItems
          }
        />
      );
    }
  };

  renderPanelForm = (isRegister) => {
    return (
      <PanelForm
        inputFields={
          isRegister ?
            this.renderRegisterInputFields : this.renderLoginInputFields
        }
        panelHeaderText="Sign Up"
        titleHeaderText="Let's Get Started"
        titleSubHeaderText="Join a community of technology readers"
        formErrorMsg="Username/E-Mail and Password combination invalid."
        submitButtonText="Register"
        hasCaptcha={true}
        onSubmitFormName="doAuthRegisterForm"
        formType="register"
      />
    );
  };

  render() {
    const { pathname } = this.props;
    const isRegister = pathname === '/register';
    const isLogin = pathname === '/login';

    return (
      <div className="auth-view container">
        <Style rules={authPageStyle} />
        {this.renderDescriptionAuthBlock(isRegister, isLogin)}
        {this.renderPanelForm(isRegister)}
      </div>
    );
  }

}

export default AuthPage;
