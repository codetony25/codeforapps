import React from 'react';
import UnsubscriberFieldForm from './UnSubscriberFieldForm.jsx';

class UnsubscriberForm extends React.Component {

  static displayName = 'UnsubscriberForm';

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div className="unsubscribe-view container">
        <UnsubscriberFieldForm />
      </div>
    );
  };

}

export default UnsubscriberForm;
