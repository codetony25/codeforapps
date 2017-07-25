import React from 'react';

class BookEditSidebarHelp extends React.Component {
  
  constructor(props) {
    super(props);

    this.displayName = 'BookEditSidebarHelp';
  }

  render() {
    console.log('Rendering BookEditSidebarHelp');
    return (
      <div className="book-edit-sidebar-help">
        <h3>Markdown Help</h3>
      </div>
    );
  }
  
}

export default BookEditSidebarHelp;