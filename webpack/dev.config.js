const path = require("path");
const { merge } = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = merge(baseConfig, {
   mode: "development",
   
   devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000,
      watchContentBase: true,
      progress: true
   },
});
