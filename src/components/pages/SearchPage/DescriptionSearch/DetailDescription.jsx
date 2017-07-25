import React from 'react';

class DetailDescription extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    // const {
    //   title,
    //   authorFirst,
    //   authorLast,
    //   cover,
    //   description } = this.props.book;

    return (
      <div className="books-detail-container">
        {/* TODO: Get this to show books again */}
        {/*<div>{title}</div>*/}
        {/*<div>{authorFirst} {authorLast}</div>*/}
        {/*<div><img src={cover} alt={title} /></div>*/}
        {/*<div>{description}</div>*/}
        <h1>Book Details</h1>
      </div>
    );
  };

}

export default DetailDescription;
