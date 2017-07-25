import React from 'react';

class BookEditSidebarDetails extends React.Component {

  constructor(props) {
    super(props);

    this.displayName = 'BookEditSidebarDetails';
  }

  render() {
    console.log('Rendering BookEditSidebarDetails');
    return (
      <div className="book-edit-sidebar-details">
        <h3>Book Details:</h3>
        <div className="sidebar-content-block">
          Title:
          <p>How to code and get girls</p>
        </div>
        <div className="sidebar-content-block">
          Book Cover:
          <p>Picture of book!</p>
        </div>
      </div>
    ); 
  }
  
}

export default BookEditSidebarDetails;