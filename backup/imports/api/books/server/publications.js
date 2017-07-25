import { Meteor } from 'meteor/meteor';
import { Books } from '/imports/api/books';

// TODO: Probably won't want this publication much longer
Meteor.publish('books', (limit = 20) => {
  return Books.find({}, {limit});
});

// TODO: Make sure the logged in user has access to editing this book
Meteor.publish('getBookForBookEdit', function(bookSlug) {
  return Books.find({ titleSlug: bookSlug, _ownerId: this.userId });
});

// TODO: Make sure that we're getting the right book from the right user
Meteor.publish('getBookForBookProfile', (bookSlug, user) => {
  return Books.find({ titleSlug: bookSlug });
});