const path = require("path");

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
                test: /\.tsx$/,
                use: ["awesome-typescript-loader"]
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}