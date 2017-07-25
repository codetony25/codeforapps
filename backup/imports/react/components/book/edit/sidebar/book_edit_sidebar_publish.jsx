import React from 'react';

class BookEditSidebarPublish extends React.Component {
  
  constructor(props) {
    super(props);

    this.displayName = 'BookEditSidebarPublish';
  }

  render() {
    console.log('Rendering BookEditSidebarPublish');
    return (
      <div className="book-edit-sidebar-publish">
        <h3>Publish</h3>
      </div>
    );
  }
  
}

export default BookEditSidebarPublish;