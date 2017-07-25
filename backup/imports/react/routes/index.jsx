import React from 'react';

import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router';

// Views
import BooksView from '/imports/react/components/books/books_view';
import BookEditView from '/imports/react/components/book/edit/book_edit_view';
import BookNewView from '/imports/react/components/book/new/book_new_view';
import BookProfileView from '/imports/react/components/book/profile/book_profile_view';
import ContactView from '/imports/react/components/contact/contact_view';
import DashboardView from '/imports/react/components/dashboard/dashboard_view';
import FaqView from '/imports/react/components/faq/faq_view';
import LandingView from '/imports/react/components/landing/landing_view';
import LoginView from '/imports/react/components/auth/auth_login_view';
import PageNotFound from '/imports/react/components/app/page_not_found';
import RegisterView from '/imports/react/components/auth/auth_register_view';
import UnsubscribeView from '/imports/react/components/unsubscribe/unsubscribe_view';

// Layouts
import AuthLayout from '/imports/react/components/layouts/auth_layout/auth_layout';
import CoreLayout from '/imports/react/components/layouts/core_layout/core_layout';

import * as Links from '/imports/react/links/link_config';
import { Auth } from './_helpers';

export default () => {
  return (
    <Router
      onUpdate={() => window.scrollTo(0, 0)}
      history={browserHistory}
    >
      <Route path="/">
        <Route component={CoreLayout}>
          <IndexRoute component={LandingView}
                      isLandingPage={true}
                      links={Links.LandingLinks}/>
          <Route path="/books"
                 component={BooksView}
                 links={Links.BooksLinks} />
          <Route path="/contact"
                 component={ContactView}
                 links={Links.ContactLinks} />
          <Route path="/book/new"
                 component={BookNewView}
                 links={Links.BookNewLinks} />
          <Route path="/book/:bookSlug"
                 component={BookProfileView}
                 links={Links.BookProfileLinks} />
          <Route path="/faq"
                 component={FaqView}
                 links={Links.FaqLinks}
                 onEnter={(route) =>
                   console.log('Entering route: ', route)} />
          <Route path="/login"
                 component={LoginView}
                 links={Links.LoginLinks} />
          <Route path="/logout"
                 links={Links.LogoutLinks}
                 onEnter={(nextState, replace) =>
                   Auth.logout(nextState, replace)} />
          <Route path="/register"
                 component={RegisterView}
                 links={Links.RegisterLinks} />
          <Route path="/unsubscribe"
                 component={UnsubscribeView}
                 links={Links.UnsubscribeLinks} />

          <Route path="/404" component={PageNotFound}
                 links={Links.StandardContextAndActionLinks} />
        </Route>

        <Route component={AuthLayout} auth="user">
          <Route path="/book/edit/:bookSlug"
                 component={BookEditView}
                 links={Links.BookEditLinks} />
          <Route path="/dashboard"
                 component={DashboardView}
                 links={Links.BookEditLinks} />
        </Route>

        {/* Catch all */}
        <Route component={CoreLayout}>
          <Route path="*"
                 component={PageNotFound}
                 links={Links.StandardContextAndActionLinks} />
        </Route>

      </Route>
    </Router>
  );
};
