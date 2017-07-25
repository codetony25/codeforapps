import React from 'react';
import { Miss, Match } from 'react-router';
import { Provider } from 'mobx-react';

import * as stores from '../../../stores';
import { LayoutContainer } from '../../containers';
import {
  LandingPage,
  HomePage,
  FaqPage,
  AuthPage,
  ContactPage,
  DashboardPage,
  SearchPage,
  NotFoundPage
} from '../../pages';

class RootContainer extends React.Component {

  static displayName = 'RootContainer';

  constructor(props) {
    super(props);
  }

  // On route change, we make sure to scroll to the top
  handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {

    // Functions we want to call when the client-side is rendered
    if (__IS_CLIENT__) {
      this.handleScrollTop();
    }

    // Grab our initial state from server-side
    const { appState } = this.props;

    /**
     *  Merge both our stores and initial state
     *  together to insert our provider
     */
    const mergeStateWithStores = { ...stores, appState };

    /**
     * We are wrapping our Match component that react router provides in
     * between the LayoutContainer, this will give us a lot of control
     * of what we want to do with the layout. This will allow us to
     * pass routing / history information and as well more data if
     * needed.
     */
    const MatchWithLayout = ({ component: Component, ...rest }) => {

      /**
       * We grab the component's display name and the path name route.
       * We should be using the view component's displayName to compare
       * in our layout instead, and not the route path string.
       *
       * NOTE: Anything we give our views that is declared with
       * `static` it will be passed in here as well.
       */
      const componentViewName = { ...Component };
      const mergeRest = { ...rest, ...componentViewName };

      return (
        <Match {...mergeRest} render={(matchProps) => (
          <LayoutContainer {...mergeRest}>
            <Component {...matchProps} />
          </LayoutContainer>
        )} />
      );
    };

    return (
      <Provider {...mergeStateWithStores}>
        <div>
          <MatchWithLayout pattern="/" exactly={true} component={LandingPage} />
          <MatchWithLayout pattern="/home" component={HomePage} />
          <MatchWithLayout pattern="/faq" component={FaqPage} />
          <MatchWithLayout pattern="/contact" component={ContactPage} />
          <MatchWithLayout pattern="/register" component={AuthPage} />
          <MatchWithLayout pattern="/login" component={AuthPage} />
          <MatchWithLayout pattern="/search" component={SearchPage} />
          <MatchWithLayout pattern="/dashboard" component={DashboardPage} />
          <Miss component={NotFoundPage} />
        </div>
      </Provider>
    );
  }

}

export default RootContainer;
