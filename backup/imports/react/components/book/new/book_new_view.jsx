import React from 'react';

import BookNewForm from './book_new_form';

class BookNewView extends React.Component {

  constructor(props) {
    super(props);

    this.displayName = 'BookNewView';
  }

  render() {
    return (
      <div className="book-new-view">
        <BookNewForm />
      </div>
    );
  }

}

export default BookNewView;
