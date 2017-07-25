import React from 'react';

class DetailSidebar extends React.Component {

  static displayName = 'DetailSidebar';

  constructor(props) {
    super(props);
  }

  render() {
    console.log('Rendering DetailSidebar');
    return (
      <div className="sidebar-details-container">
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

export default DetailSidebar;
