import React from 'react';
// import { Books } from '/imports/api/books';
import DetailDescription from './DetailDescription.jsx';

class ListDescription extends React.Component {

  static displayName = 'ListDescription';

  constructor(props) {
    super(props);
  }

  renderBooksList = () =>
    this.props.books.map(book =>
      <BooksDetail key={book._id} book={book} />);

  render = () => {
    return (
      <div className="books-list container">
        {/*{this.renderBooksList()}*/}
        <DetailDescription />
      </div>
    );
  };

}

export default ListDescription;
