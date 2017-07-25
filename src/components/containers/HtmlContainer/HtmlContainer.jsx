import React from 'react';
import { analytics } from '../../../config';

class HtmlContainer extends React.Component {

  static displayName = 'HtmlContainer';

  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      description,
      script,
      initialState,
      renderedMarkupString
    } = this.props;

    // Icon Urls
    const fontAwesomeIconUrl =
      '//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css';
    const ionicIconUrl =
      '//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css';

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="stylesheet" href={fontAwesomeIconUrl} />
          <link rel="stylesheet" href={ionicIconUrl} />
          <link
            rel="apple-touch-icon" sizes="144x144"
            href="/assets/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/assets/favicons/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/assets/favicons/favicon-16x16.png"
            sizes="16x16"
          />
          <link rel="manifest" href="/assets/favicons/manifest.json" />
          <link
            rel="mask-icon"
            href="/assets/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link
            rel="stylesheet"
            href="/assets/icons/fontawesome/fontawesome.css"
          />
          <link
            rel="stylesheet"
            href="/assets/icons/linearicons/linearicons.css"
          />
          <link rel="stylesheet" href="/assets/styles/normalize.css" />
          {initialState &&
            <script
              dangerouslySetInnerHTML={{
                __html:
                  `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};`
              }}
            />
          }
        </head>
        <body>
          {renderedMarkupString &&
            <div
              id="app"
              dangerouslySetInnerHTML={{ __html: renderedMarkupString }}
            />
          }
          {script && <script src={script} />}
          {analytics.google.trackingId &&
            <script
              dangerouslySetInnerHTML={{ __html:
              `window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=
                +new Date;
                ga('create','${
                analytics.google.trackingId
              }','auto');ga('send','pageview');`
              }}
            />
          }
          {analytics.google.trackingId &&
            <script
              src="https://www.google-analytics.com/analytics.js"
              async={true}
              defer={true}
            />
          }
        </body>
      </html>
    );
  }

}

export default HtmlContainer;
