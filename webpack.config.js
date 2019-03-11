const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
/**
 * Define loaders
 * @return {Array}
 */
function getRules() {
  return [
    {
      test: /(\.js)/,
      include: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: require.resolve('./node_modules/codecopy/umd/codecopy.min.js'),
      use: [{
        loader: 'expose-loader',
          options: 'codecopy',
        },
      ],
    },
    {
      test: /(\.jpg|\.png)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      ],
    },
    {
      test: /\.(s*)css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.json/,
      loader: 'json-loader',
    },
  ];
}

module.exports = ({
  dev,
  scripts: {
    fabricator: { src: fabSrc },
    toolkit: { src: scriptSrc },
  },
  dest,
}) => {
  return {
    mode: dev ? 'development' : 'production',
    entry: {
      'fabricator/scripts/f': fabSrc,
      'toolkit/scripts/toolkit': scriptSrc,
    },
    output: {
      path: path.resolve(__dirname, dest, 'assets'),
      filename: '[name].js',
      pathinfo: dev,
    },
    resolve:{
      alias:{
        codecopy: path.resolve('./node_modules/codecopy/umd/codecopy.min.js'),
      },
      // modulesDirectories: ['node_modules']
    },
    devtool: dev ? 'cheap-module-eval-source-map' : false,
    module: {
      rules: getRules(),
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: './node_modules/codecopy/umd/codecopy.min.js',
          to: 'default/scripts/c',
        },
        {
          from: './node_modules/codecopy/umd/codecopy.min.css',
          to: 'default/styles/c',
        },
        {
          from:
            'https://cdn.jsdelivr.net/npm/ng2-semantic-ui@0.9.7/bundles/ng2-semantic-ui.umd.min.js',
          to: 'ng2/scripts/ng2-semantic',
        },
      ]),
    ]
  };
};
