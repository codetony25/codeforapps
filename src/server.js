import 'source-map-support/register';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { ServerRouter, createServerRenderContext } from 'react-router';

import { port } from './config';
import { HtmlContainer, RootContainer } from './components/containers';

/**
 * When all files are compiled, a assets.json is automatically created
 * by webpack for caching purposes.
 */
import assets from './assets';

/**
 * Tell any CSS tooling (such as Material UI) to use all vendor
 * prefixes if the user agent is not known.
 */
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

// Server-side only global environment variables
global.__IS_DEVELOPMENT__ = process.env.NODE_ENV === 'development';
global.__IS_CLIENT__ = false;
global.__IS_SERVER__ = true;

const app = express();

// Register Node.js middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Disable useless headers
app.disable('x-powered-by');

/**
 * Register server-side rendering middleware
 * This is where the initial routing takes place as
 * soon as the user types in our url and enters
 */
const context = createServerRenderContext();

app.get('*', async (req, res, next) => {

  /**
   * Make sure that we are not going to these routes
   * accidentally, because doing so would cause an
   * unnecessary re-render
   */
  if (
    req.path.includes('webpack_hmr') ||
    req.path.includes('browser-sync') ||
    req.path.includes('hot-update') ||
    req.path.includes('favicon.ico'))
  {
    return;
  }

  try {
    const successStatusCode = 200;
    const redirectStatusCode = 301;
    const errorStatusCode = 404;

    const data = {
      appState: {
        isInitial: true,
        username: 'Tony is Awesome',
        password: 'Password',
        sessionId: '1337'
      }
    };

    // Set up html body container markup
    const renderedMarkupString =
      await ReactDOMServer.renderToString(
        <ServerRouter
          location={req.path}
          context={context}
        >
          <RootContainer {...data} />
        </ServerRouter>
      );

    const result = context.getResult();

    console.log('Current Route:', req.path);

    // Redirect to home page
    if (result.redirect) {
      return res.redirect(redirectStatusCode, '/');
    } else {

      /**
       * Create initial data to insert into our Html markup container to
       * render on the server.
       */
      const htmlData = {
        title: 'EverLib Home | Learn interactively',
        description:
          'Keep learning interactively with the most up to date books',
        script: assets.app.js,
        initialState: data,
        renderedMarkupString
      };

      const completedHtmlMarkup =
        await ReactDOMServer.renderToStaticMarkup(
          <HtmlContainer {...htmlData} />
        );

      // If no routes matched -  404
      if (result.missed) {
        return res.status(errorStatusCode)
          .send(`<!DOCTYPE html>${completedHtmlMarkup}`);
      }

      // Success response - 200
      return res.status(successStatusCode)
        .send(`<!DOCTYPE html>${completedHtmlMarkup}`);
    }
  } catch (error) {
    console.log("Server Side Routing Error:", error);
    return await next(error);
  }
});

// Launch the server with the specified port
try {
  app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
  });
} catch(error) {
  console.log(`Error while listening to ${port}`, error);
}
