import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Migrations } from 'meteor/percolate:migrations';
import { Books } from '/imports/api/books';
import { slugify } from 'underscore.string';

import { newChapter }
  from '/imports/react/components/book/edit/book_edit_helpers';

import { name, lorem, image } from 'faker';

Migrations.add({
  version: 3,
  up: () => {
    const chapters = {};
    chapters[(new Mongo.ObjectID)._str] = newChapter;
    chapters[(new Mongo.ObjectID)._str] = newChapter;

    const chapterList = Object.keys(chapters);

    const _ownerId = Meteor.users.find({ username: 'user' }).fetch()[0]._id;
    const title = "Understanding ECMAScript 6";
    const titleSlug = slugify(title);
    const tags = ['javascript', 'es6'];
    const version = 1.1;
    const publishDate = Date.now();
    const lastUpdated = Date.now();
    const readers = 2;
    const views = 100;
    const versions = [
      {
        title,
        version,
        chapterList,
        chapters,
        publishDate
      }
    ];
    const draft = {
      title,
      chapterList,
      chapters
    };

    const reviewScore = 9.3;

    Books.insert({
      _ownerId,
      title,
      titleSlug,
      tags,
      version,
      versions,
      publishDate,
      lastUpdated,
      readers,
      views,
      draft,
      reviewScore
    });
  },
  down: () => {
    Books.remove({});
  }
});