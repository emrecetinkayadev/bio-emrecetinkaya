const webpack = require("webpack");
const path = require("path")
var htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode:"development",
    entry: "../src/index.js",
    register: "../src/register.js",
    validation: "../src/validation.js", 
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,"dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", 
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: "[name].[contenthash].[ext]",
                      outputPath: "fonts/",
                    }
                  }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "register.html",
            filename: "register.html",
            chunks: ["register","validation"]
        }), 
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })

    ]

};