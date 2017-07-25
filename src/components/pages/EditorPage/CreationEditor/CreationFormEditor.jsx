import {createContainer} from 'meteor/react-meteor-data';

import React from 'react';

import {
  bookTitleValidation,
  bookDescriptionValidation
} from '../../../../core/utils/form_handling/validations/client';
import {
  ReactiveButton,
  ReactiveSpan,
  ReactiveInput,
  // ReactiveLabel,
  ReactiveErrorMessage,
  ReactiveTextarea,
  ReactiveForm
} from '../../../../core/modules/everlib_react_forms';

class CreationFormEditor extends React.Component {

  static displayName = 'CreationFormEditor';

  constructor(props) {
    super(props);

    this.state = {
      formError: ''
    };
  }

  // onSuccess can take an errorCallback that sends
  // control back to the reactive form module
  // this callback takes a meteor error object and
  // an optional default message.
  onSuccess = (formState, errorCallback) => {
    // Don't know yet.
  };

  render() {
    return (
      <div className="creation-form-editor-container panel">
        Let's set up your book. Don't worry, you can edit this later.
        Select up to 5 tags that best represent your book.
        <div className="panel-body">
          <div>
            <ReactiveForm
              onSubmit="doCreationNewForm"
              onSuccess={this.onSuccess}
              hideAllReactiveUntilFirstBlur={true}>
              <ReactiveErrorMessage
                fieldName="form"
                className="action-error-msg" />
              <div className="input-container">
                <div className="error-msg">
                  <ReactiveErrorMessage
                    fieldName="bookTitle" />
                </div>
                <ReactiveSpan
                  fieldName="bookTitle"
                  className="label-default">
                  Book Title
                </ReactiveSpan>
                <ReactiveInput
                  type="text"
                  fieldName="bookTitle"
                  placeholder="Book Title"
                  className="input-default"
                  classNameInvalid="input-default error"
                  validations={[bookTitleValidation]}
                  required={true}
                />
                <ReactiveSpan stage="invalid" fieldName="bookTitle">
                  <i className="icon ion-close" />
                </ReactiveSpan>
                <ReactiveSpan stage="valid" fieldName="bookTitle">
                  <i className="icon ion-checkmark" />
                </ReactiveSpan>
              </div>
              <div>
                <ReactiveSpan
                  fieldName="description"
                  className="label-default"
                >
                  Message *
                </ReactiveSpan>
                <ReactiveErrorMessage
                  className="error-msg"
                  fieldName="description"
                />
                <ReactiveTextarea
                  className="input-default contact-textarea"
                  classNameInvalid="input-default contact-textarea error"
                  fieldName="description"
                  required={true}
                  placeholder="Enter your book description..."
                  validations={[bookDescriptionValidation]} />
              </div>
              <div>
                <ReactiveButton
                  className="btn-info btn-large"
                  stage="valid"
                  type="submit"
                >
                  Create Book
                </ReactiveButton>
                <ReactiveButton
                  className="btn-disabled btn-large"
                  stage="invalid"
                  type="button"
                  disabled
                >
                  Create Book
                </ReactiveButton>
                <ReactiveButton
                  className="btn-disabled btn-large"
                  stage="waiting"
                  type="button"
                  disabled
                >
                  Create Book
                </ReactiveButton>
              </div>

            </ReactiveForm>
          </div>
        </div>
      </div>
    );
  }

}

export default CreationFormEditor;
