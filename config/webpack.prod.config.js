import merge from "webpack-merge";
import ExtractTextPlugin from "extract-text-webpack-plugin";
// import precss from 'precss';
import autoprefixer from "autoprefixer";
import dotenv from "dotenv";
import webpack, { optimize } from "webpack";
import common from "./webpack.config.common.babel";

const { UglifyJsPlugin } = optimize;

module.exports = merge(common, {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer]
              }
            },
            "sass-loader"
          ]
        })
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
      comments: false,
      minimize: true
    }),
    new ExtractTextPlugin({
      filename: "css/style.css"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
});
