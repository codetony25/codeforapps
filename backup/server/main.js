/**
 * This is the main entry point for the server.
 */
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

// Import all the collection api's needed by the server
import '/imports/api/books/server/';
import '/imports/api/contact_messages/server/';
import '/imports/api/files/server/';
import '/imports/api/notifications/server/';
import '/imports/api/subscribers/server/';
import '/imports/api/users/server/';

// Form api's
import '/imports/form_handling/submissions/server/';
import '/imports/form_handling/validations/server/';

import { Migrations } from 'meteor/percolate:migrations';
import '/imports/migrations/';

import fs from 'fs';

Meteor.startup(() => {
  Migrations.migrateTo(3);
});
