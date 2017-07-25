/**
 * This is the main entry point for the client app.
 */
import { Meteor } from 'meteor/meteor';

import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';

import Root from '/imports/react/routes/index';
import defaultStyles from '/imports/react/styles/defaults';
import globalStyles from '/imports/react/styles/globals';
import animationStyles from '/imports/react/styles/animations';
import fontStyles from '/imports/react/styles/fonts';
import { Style } from 'jassy';

// Import all client config files
import '/imports/api/users/client/';

// Get our own info
Meteor.subscribe('ownerInfo');

// Import the accounts api
import '/imports/api/accounts';

class MainApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* Any styles that should be included globally is added here */}
        <Style rules={
          Object.assign({},
          globalStyles,
          defaultStyles,
          animationStyles,
          fontStyles)} />
        <Root />
      </div>
    );
  }

}

Meteor.startup(() => {
  render(
    <MainApp />,
    document.getElementById('app')
  );
});
