import createBrowserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';
import run from './run';
import clean from './clean';
import copy from './copy';
import compileServer from './compileServer';
import runServer from './runServer';

const isDevelopment = !process.argv.includes('--release');

/**
 * Launches a development web server with "live reload" functionality -
 * synchronizing URLs, interactions and code changes across multiple devices
 * if browserSync is enabled.
 */
async function start() {
  await run(clean);
  await Promise.all([
    run(copy),
    run(compileServer)
  ]);
  await new Promise(resolve => {
    const compiler = webpack(config);

    let handleServerBundleComplete = async () => {
      const server = await runServer();
      const browserSync = createBrowserSync.create();

      // Initialize browserSync
      browserSync.init({
        ...(isDevelopment ? { open: true } : { notify: false, ui: false }),
        proxy: {
          target: server.host,
          middleware: [
            webpackDevMiddleware(compiler, {

              /**
               * IMPORTANT: webpack middleware can't access config,
               * so we should provide publicPath by ourselves
               */
              publicPath: config.output.publicPath,

              // Colored output for statistics
              stats: config.stats
            }),

            // compiler should be the same as above
            webpackHotMiddleware(compiler)
          ]
        }
      }, resolve);
      handleServerBundleComplete = runServer;
    };
    compiler.run(handleServerBundleComplete);
  });
}

export default start;
