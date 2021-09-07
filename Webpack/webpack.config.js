const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    mode: "development",
    module: {
      rules: [
        {
            test: /\.html$/,
            use: [{
              loader: "html-loader",
              options: {minimize:true}
            }
            ],
          },
        {
          test: /\.s[ac]ss$/i,
          use: [
          "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
            type: "asset",
          },
      ],
    },
    plugins :[
        new HtmlWebPackPlugin({
            template : "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    
  };
  