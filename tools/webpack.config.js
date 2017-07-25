import path from 'path';
import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';

/**
 * TODO: Babel has an issue with including node environments
 *
 * we are using --release for now.
 * https://github.com/babel/babel/issues/4539
 */
const isDevelopment = !process.argv.includes('--release');
const isVerbose = process.argv.includes('--verbose');

// Webpack configurations
const config = {

  // The base directory
  context: path.resolve(__dirname, '../src'),

  // The entry point for the bundle
  entry: {
    app: [
      ...isDevelopment ? [
        'react-hot-loader/patch',
        'babel-polyfill',
        'webpack-hot-middleware/client',
        './client.js'
      ] : [
        'babel-polyfill',
        './client.js'
      ]
    ]
  },

  // Options affecting the output of the compilation
  output: {
    path: path.resolve(__dirname, '../build/public/assets'),
    publicPath: '/assets/',
    filename: isDevelopment ?
      '[name].js?[hash]' : '[name].[chunkhash].js',
    chunkFilename: isDevelopment ?
      '[name].[id].js?[hash]' : '[name].[id].[chunkhash].js',
    sourcePrefix: '  '
  },

  // Developer tool to enhance debugging, source maps
  devtool: isDevelopment ? 'eval' : 'source-map',

  // Options for resolving module requests
  resolve: {
    modules: [
      path.resolve(__dirname, '../node_modules')
    ],
    extensions: ['.json', '.jsx', '.js']
  },

  // What information should be printed to the console
  stats: {
    colors: true,
    reasons: isDevelopment,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose
  },

  // The list of plugins for Webpack compiler
  plugins: [

    /**
     * Defines global constants which can be configured at
     * compile time for the client-side only.
     */
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': isDevelopment ? '"development"' : '"production"',
        '__IS_CLIENT__': JSON.stringify(true),
        '__IS_SERVER__': JSON.stringify(false),
        '__IS_DEVELOPMENT__': JSON.stringify(isDevelopment)
      }
    }),

    /**
     * Emits a json file with assets paths. When working with Webpack you
     * might want to generate your bundles with a generated hash in them
     * (for cache busting).
     */
    new AssetsPlugin({
      path: path.resolve(__dirname, '../build'),
      filename: 'assets.json'
    }),

    // If its development, turn on hot module and no errors.
    ...isDevelopment ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ] : [

      // on production we want to uglify and apply the de-duplication
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: isVerbose
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),

      /**
       * For a more aggressive chunk merging strategy. Even similar
       * chunks are merged if the total size is reduced enough.
       */
      new webpack.optimize.AggressiveMergingPlugin()

      // TODO: When HTTP2 comes around, we should use AggressiveSplittingPlugin
    ]
  ],

  // Options affecting the normal modules
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory',
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.(css|scss|txt|png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|mp3)/,
        loader: path.resolve(__dirname, './webpack.fileserver.js'),
        query: {
          outputPath: path.resolve(__dirname, '../build')
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name: isDevelopment ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
          limit: 10000
        }
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
        query: {
          name: isDevelopment ? '[path][name].[ext]?[hash]' : '[hash].[ext]'
        }
      }
    ]
  }
};

export default config;
