import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import FastClick from 'fastclick';
import { BrowserRouter } from 'react-router';

import { RootContainer } from './components/containers';

// Client-side global environment variables
global.__IS_DEVELOPMENT__ = process.env.__IS_DEVELOPMENT__;
global.__IS_CLIENT__ = process.env.__IS_CLIENT__;
global.__IS_SERVER__ = process.env.__IS_SERVER__;

const initialState = window.__INITIAL_STATE__;

// Make taps on links and buttons work fast on mobiles
FastClick.attach(document.body);

/**
 * Set up client-side render with the initial state given
 * by the server side
 */
render((
  <AppContainer>
    <BrowserRouter>
      <RootContainer {...initialState} />
    </BrowserRouter>
  </AppContainer>
), document.getElementById('app'));

// Enable Hot Module Replacement (HMR)
if (module.hot && __IS_DEVELOPMENT__) {
  module.hot.accept(
    './components/containers/RootContainer/RootContainer.jsx', () => {
      const NextRootContainer = require(
        './components/containers/RootContainer/RootContainer.jsx'
      ).default;

      render((
        <AppContainer>
          <BrowserRouter>
            <NextRootContainer {...initialState} />
          </BrowserRouter>
        </AppContainer>
      ), document.getElementById('app'));
    }
  );
}


/**
 * If we are currently developing we will turn on performance tools to
 * warn us. whyDidYouUpdate will warn us if there are any unnecessary
 * re-renders, and react-addon-perf is a profiling tool that tells you
 * exactly where you need to put the shouldComponentUpdate hooks.
 */
// if (process.env.NODE_ENV === 'development') {
//   System.import('react-addons-perf').then(Perf => {
//     window.ReactPerf = Perf;
//   });

// System.import('why-did-you-update').then(({whyDidYouUpdate}) => {
//   whyDidYouUpdate(React);
// });
// }