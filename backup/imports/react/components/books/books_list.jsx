import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books';
import BooksDetail from '/imports/react/components/books/books_detail';

class BooksList extends React.Component {

  constructor(props) {
    super(props);
  }

  renderBooksList = () =>
    this.props.books.map(book =>
      <BooksDetail key={book._id} book={book} />);

  render = () => {
    return (
      <div className="books-list container">
        {this.renderBooksList()}
      </div>
    );
  };

}

export default createContainer(() => {
  Meteor.subscribe('books');
  return { books: Books.find({}).fetch() };
}, BooksList);
