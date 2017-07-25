import React from 'react';
import UnsubscribeForm from './unsubscribe_form';

class UnsubscribeView extends React.Component {

  constructor(props) {
    super(props);

    this.displayName = 'UnsubscribeView';
  }

  render = () => {
    return (
      <div className="unsubscribe-view container">
        <UnsubscribeForm />
      </div>
    );
  };

}

export default UnsubscribeView;
