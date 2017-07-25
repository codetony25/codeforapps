import webpack from 'webpack';
import webpackConfig from './webpack.config';

// Creates client-side application bundle from the source files.
const compileClient = () => {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        return reject(err);
      }
      console.log(stats.toString(webpackConfig.stats));
      return resolve();
    });
  });
};

export default compileClient;
