import { Meteor } from 'meteor/meteor';
import { Books } from '/imports/api/books';

Meteor.methods({
  /**
   * Update just the draft. It's important to only update the draft
   * in case something else is being updated somewhere else and the object
   * we received is a slightly older version. For instance if the number of "readers"
   * increases at the same time as a new draft is being worked on, if readers hits first
   * while save is in transit, we'll lose the reader.
   *
   * TODO: Make sure the person updating is an owner/collaborator
   */
  'updateBookDraft': (_id, draft) => {
    Books.update({ _id }, { $set: { draft } });
  }
});