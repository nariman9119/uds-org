const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ['@babel/polyfill', "./src/components/App.js"], // set polyfill first to avoid errors related to async/await

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "orgsApp.js",
        libraryTarget: "umd",
        publicPath: '/'

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'redux': 'redux',
        'react-redux': 'react-redux',
        'styled-components': 'styled-components'
    }

};

