import React from 'react';

import CreationFormEditor from './CreationFormEditor.jsx';

class CreationEditor extends React.Component {

  static displayName = 'CreationEditor';

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="creation-editor-container">
        <CreationFormEditor />
      </div>
    );
  }

}

export default CreationEditor;
