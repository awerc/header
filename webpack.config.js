const { resolve } = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dist = resolve(__dirname, '..', 'dist', 'frontend');
const common = resolve(__dirname, 'scripts', 'common');

const devMode = process.env.NODE_ENV !== 'production';

const cssLoaders = [
  'resolve-url-loader',
  {
    loader: 'less-loader',
    options: {
      sourceMap: true,
    },
  },
];

if (!devMode) cssLoaders.unshift('css-loader', 'postcss-loader');
else cssLoaders.unshift('css-loader');

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: resolve('.', 'src', 'index.js'),
  output: {
    path: dist,
    publicPath: '/',
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss|sass|less)(\?.+)?$/,
        use: [MiniCssExtractPlugin.loader, ...cssLoaders],
      },
      {
        test: /\.(gif|svg|ico)(\?.+)?$/,
        exclude: [/sprite\.svg$/],
        loader: {
          loader: 'url-loader',
          query: {
            limit: 512,
            name: 'images/[name].[ext]',
          },
        },
      },
      {
        test: /\.(png|jpe?g)(\?.+)?$/,
        loader:
          'file-loader?name=images/[name].[ext]'
        ,
      },
      {
        test: /sprite\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2)(\?.+)?$/,
        loader: {
          loader: 'url-loader',
          query: {
            limit: 2048,
            name: 'fonts/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new CopyWebpackPlugin(['./public']),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        APIHOST: JSON.stringify(process.env.APIHOST),
      },
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          compress: {
            passes: 2,
            drop_console: true,
            warnings: false,
          },
          output: {
            comments: '',
            beautify: false,
          },
          mangle: true,
        },
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          preset: 'advanced',
        },
      }),
    ],
  },
  resolve: {
    alias: {
      actions: resolve(common, 'actions'),
      components: resolve(common, 'components'),
      constants: resolve(common, 'constants'),
      containers: resolve(common, 'containers'),
      decorators: resolve(common, 'decorators'),
      middlewares: resolve(common, 'middlewares'),
      reducers: resolve(common, 'reducers'),
      services: resolve(common, 'services'),
      sources: resolve(common, 'sources'),
      store: resolve(common, 'store'),
      theme: resolve(common, 'theme'),
      utils: resolve(common, 'utils'),
    },
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass', '.less'],
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
  },
};
