const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "boundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.tsx$/,
                use: ["awesome-typescript-loader"]
            }
        ]
    },
    devServer: {
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "my_blog",
            template: path.resolve(__dirname, "./public/index.html")
        }),
        new DefinePlugin({
            BASE_URL: '"./"'
        })
    ]
}