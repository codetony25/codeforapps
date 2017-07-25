import React from 'react';
import { Style } from 'jassy';

import { PanelForm } from '../../forms';
import contactViewStyle from './contactPage.style';
import {
  emailValidation,
  messageValidation
} from '../../../core/utils/form_handling/validations/client';

class ContactView extends React.Component {

  static displayName = 'ContactPage';

  constructor(props) {
    super(props);

    this.renderInputFields = [
      {
        fieldName: 'email',
        hideOnFocus: true,
        labelName: 'Contact E-Mail *',
        doValidation: [emailValidation],
        placeholder: 'Enter your contact E-mail',
        required: true
      },
      {
        inputType: 'textarea',
        fieldName: 'message',
        hideOnFocus: true,
        labelName: 'Message *',
        doValidation: [messageValidation],
        placeholder: 'Enter your message between 10 and 500 characters...',
        required: true
      }
    ];
  }

  render() {
    return (
      <div>
        <Style rules={contactViewStyle()} />
        <div className="contact-view container">
          <PanelForm
            inputFields={this.renderInputFields}
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
