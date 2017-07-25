import React from 'react';

class PublishSidebar extends React.Component {

  static displayName = 'PublishSidebar';

  constructor(props) {
    super(props);
  }

  render() {
    console.log('Rendering PublishSidebar');
    return (
      <div className="sidebar-publish-container">
        <h3>Publish</h3>
      </div>
    );
  }

}

export default PublishSidebar;
