import { createContainer } from 'meteor/react-meteor-data';

import React from 'react';
import { browserHistory } from 'react-router';

import { Books } from '/imports/api/books';

class BookProfileView extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };

    this.displayName = 'BookProfileView';
  }

  componentWillReceiveProps = (nextProps) => {
    // If we're no longer loading and the book is null, it doesn't exist.
    if (!nextProps.subscriptionLoading && !nextProps.book) {
      // We want to use replace instead of push so that the bad url doesn't stay in history
      browserHistory.replace('/404');
    }
    // If we're not waiting on the subscription any longer, and we haven't set up our
    // state based off some book properties, let's do that now.
    if (!nextProps.subscriptionLoading && nextProps.book && !this.state.loaded) {
      // TODO: If there is no published version of this book, make sure that only
      // TODO: The authors an contributors can see it.
      this.setState({ loaded: true });
    }
  };

  render() {
    if (!this.state.loaded) {
      // TODO: Do some loading thing
      return null;
    }

    return (
      <div className="book-profile-view">
        {this.props.book.title}
      </div>
    );
  }
}

export default createContainer((props) => {
  // Get the book from the slug
  const bookHandle =
    Meteor.subscribe('getBookForBookProfile', props.params.bookSlug);
  // A variable to see if the book is still loading
  const subscriptionLoading = !bookHandle.ready();
  const book = Books.find({}).fetch()[0];
  return {
    subscriptionLoading,
    book
  };
}, BookProfileView);