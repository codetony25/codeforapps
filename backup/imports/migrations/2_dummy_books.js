import { Migrations } from 'meteor/percolate:migrations';
import { Books } from '/imports/api/books';

import { name, lorem, image } from 'faker';

Migrations.add({
  version: 2,
  up: () => {
    for (let i = 1; i <= 20; i++) {
      const book = {
        authorFirst: name.firstName(),
        authorLast: name.lastName(),
        title: lorem.words(),
        cover: `/images/books/${i}.png`,
        description: lorem.paragraph()
      };
      Books.insert(book);
    }
  },
  down: () => {
    Books.remove({});
  }
});