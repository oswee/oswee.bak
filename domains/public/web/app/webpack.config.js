const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const loadPresets = require('./build-utils/loadPresets');

const modeConfig = env => require(`./build-utils/webpack.${env.mode}.js`)(env);

module.exports = ({ mode, presets }) => {
    return webpackMerge(
    {
      mode,
      plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/index.html'
        }),
        new CopyWebpackPlugin(
          [{ from: 'src/assets/img', to: 'img/' }, 'src/manifest.webmanifest'],
          { ignore: ['.DS_Store'] }
        )
      ]
    },
    modeConfig({ mode, presets }),
    loadPresets({ mode, presets })
  );
};