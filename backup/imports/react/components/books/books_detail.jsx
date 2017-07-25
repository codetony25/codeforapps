import React from 'react';

class BookDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    const {
      title,
      authorFirst,
      authorLast,
      cover,
      description } = this.props.book;

    return (
      <div className="books-detail-container">
        <div>{title}</div>
        <div>{authorFirst} {authorLast}</div>
        <div><img src={cover} alt={title} /></div>
        <div>{description}</div>
      </div>
    );
  };

}

export default BookDetail;
