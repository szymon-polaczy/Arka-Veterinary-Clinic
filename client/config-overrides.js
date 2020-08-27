//const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
  if (!config.devServer)
  config.devServer = {
    historyApiFallback: true,
  }

  if (!config.output.publicPath)
    config.output.assign({publicPath: '/'})

  /*if (process.env.NODE_ENV === 'production') {
    config.devServer = {
      historyApiFallback: true,
    }
  }*/

  return config;
}