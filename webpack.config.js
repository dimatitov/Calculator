const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: "./src/index.tsx",
   mode: "development",
   devtool: 'inline-source-map',
   output: {
      filename: "./main.js"
   },
   
   devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000,
      watchContentBase: true,
      progress: true
   },

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
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: "babel-loader"
            }
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
         template: path.join(__dirname, "public", "index.html")
      })
   ]
};
