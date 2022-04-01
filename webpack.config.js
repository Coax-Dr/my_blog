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
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.(png|svg|jpe?g)$/,
                type: "asset",
                generator: {
                    filename: "img/[name].[hash:6][ext]"
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 200 * 1024
                        // 配置asset/inline解析资源的最大体积，大于这个体积就使用asset/resource打包
                    }
                }
            }
        ]
    },
    devServer: {
        hot: true
    },
    // 在webpack和typescript都要配置模块解析
    resolve: {
        extensions: [".js", ".json", ".tsx", ".ts", ".less"],
        alias: {
            "container": path.resolve(__dirname, "./src/container"),
            "pages": path.resolve(__dirname, "./src/pages"),
            "assets": path.resolve(__dirname, "./src/assets")
        }
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