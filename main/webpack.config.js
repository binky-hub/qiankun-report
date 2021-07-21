const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./index.js",
    devtool: "source-map",
    devServer: {
        open: true,
        port: 8080,
    },
    output: {
        publicPath: "/",
    },
    mode: "development",
    resolve: {
        extensions: [".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html",
        }),
    ],
};
