const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   devtool: 'inline-source-map',

   resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
   },

   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/ 
         },

         { 
            enforce: "pre", 
            test: /\.js$/, 
            loader: "source-map-loader" 
         },

         {
            test: /\.module.css$/,
            use: [
               "style-loader",
               {
                  loader: "css-loader",
                  options: {
                     modules: true
                  }
               }
            ]
         },

         {
            test: /\.css$/,
            exclude: /\.module\.(css)$/, 
            use: [
               "style-loader", "css-loader"
            ]
         },
         
         {
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"]
         }
      ]
   },

   plugins: [
      new HtmlWebpackPlugin({
         template: 'public/index.html'
      })
   ]
};
