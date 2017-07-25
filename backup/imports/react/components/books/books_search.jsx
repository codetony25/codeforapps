import React from 'react';

class BooksSearch extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="book-search-container content-box">
        <div>
          <input
            type="text"
            placeholder="Search for a Book..."
          />
          <div className="submit-container">
            <i className="icon ion-search" />
          </div>
          <div className="reset-container">
            <i className="icon ion-close" />
          </div>
        </div>
      </div>
    );
  }

}

export default BooksSearch;
