import React from 'react';
import { Style } from 'jassy';
import BooksList from '/imports/react/components/books/books_list';
import BooksSearch from '/imports/react/components/books/books_search';
import bookStyles from '/imports/react/components/books/books_style';

class BooksView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: bookStyles()
    };
  }

  render() {
    return (
      <div className="book-search-view">
        <Style rules={this.state.styles} />
        <BooksSearch />
        <BooksList />
      </div>
    );
  }

}

export default BooksView;
