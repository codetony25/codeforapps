import React from 'react';

import AuthDescription from '/imports/react/components/auth/auth_description'
import { Style } from 'jassy';
import authStyles from '/imports/react/styles/shared/auth_style';
import FormPanel from '/imports/react/components/form/form_panel';

import {
  doEmailValidation,
  doMessageValidation
} from '/imports/form_handling/validations';

class ContactView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: authStyles()
    };
  }

  renderDescriptionList = () => {
    return (
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
        fieldName: 'email',
        hideOnFocus: true,
        labelName: 'Contact E-Mail *',
        doValidation: [doEmailValidation],
        placeholder: 'Enter your contact E-mail',
        required: true
      },
      {
        inputType: 'textarea',
        fieldName: 'message',
        hideOnFocus: true,
        labelName: 'Message *',
        doValidation: [doMessageValidation],
        placeholder: 'Enter your message between 10 and 500 characters...',
        required: true
      }
    ];
  };

  render() {
    return (
      <div>
        <Style rules={this.state.styles} />
        <div className="auth-view container">
          <AuthDescription
            authHeader={'Send Us a Message!'}
            authDescription={`Feel free to contact us if you have any
            questions, concerns, or if you just want to tell us how happy you
            are that EverLib exists. We are here for you!`}
            authList={this.renderDescriptionList}
          />
          <FormPanel
            inputFields={this.renderInputFields()}
            panelHeaderText="Contact Us"
            titleHeaderText="Send Us a Message"
            titleSubHeaderText="Questions, Concerns or Suggestions!"
            formErrorMsg="Username/E-Mail and Password combination invalid."
            submitButtonText="Send"
            hasCaptcha={false}
            onSubmitFormName="doContactMessageForm"
            formType="contact"
          />
        </div>
      </div>
    );
  }

}

export default ContactView;
