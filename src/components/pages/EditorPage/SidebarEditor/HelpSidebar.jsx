import React from 'react';

class HelpSidebar extends React.Component {

  static displayName = 'HelpSidebar';

  constructor(props) {
    super(props);
  }

  render() {
    console.log('Rendering HelpSidebar');
    return (
      <div className="sidebar-help-container">
        <h3>Markdown Help</h3>
      </div>
    );
  }

}

export default HelpSidebar;
