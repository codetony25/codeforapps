// TODO: Include the sidebar here.

import React from 'react';
import { Match } from 'react-router';
import asyncComponent from '../../../core/utils/asyncComponent';

const EditorPage = asyncComponent(() =>
  System.import('../EditorPage/EditorPage.jsx').then(module => module.default)
);

class DashboardPage extends React.Component {

  static displayName = 'DashboardPage';

  constructor(props) {
    super(props);
  }

  // TODO: Make the editor appear
  render() {
    return (
      <div className="dashboard-view">
        {/* <UserSidebarLayout /> */}
        <h1 style={{ paddingTop: 40 }}>Dashboard view</h1>
        <Match
          pattern="/dashboard/editor"
          component={EditorPage}
        />
      </div>
    );
  }

}

export default DashboardPage;
