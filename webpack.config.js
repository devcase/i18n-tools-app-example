const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    devtool: 'source-map',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            title: 'Test i18n Tools',
            template: 'assets/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: [
                                "@babel/plugin-transform-runtime",
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-proposal-class-properties",
                                "@babel/plugin-proposal-object-rest-spread",
                                "@babel/plugin-transform-async-to-generator",
                                ["i18n-tools/dist/babel-plugin-i18n-translate", { prepare: true }],
                            ]
                        },
                    }
                ]
            }
        ]
    },
    mode: "development"
}