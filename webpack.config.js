const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = [
    {
        plugins: [
            new CleanWebpackPlugin(['dist'])
        ]
    },
    ...['pt-BR', 'en-US'].map(locale => ({
        entry: {
            [locale]: './src/App.js'
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: [
                                "@babel/plugin-transform-runtime",
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-proposal-class-properties",
                                "@babel/plugin-proposal-object-rest-spread",
                                "@babel/plugin-transform-async-to-generator",
                                ["i18n-tools/dist/babel-plugin-i18n-translate", { locale }]
                            ]
                        },
                    }
                }
            ]
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist', 'static', 'js', locale)
        },
        mode: "development"
    })),
    {
        entry: {
            index: './src/index.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Development',
                template: 'assets/index.html'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: [
                                "@babel/plugin-transform-runtime",
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-proposal-class-properties",
                                "@babel/plugin-proposal-object-rest-spread",
                                "@babel/plugin-transform-async-to-generator"
                            ]
                        },

                    }
                }
            ]
        },
        output: {
            filename: '[name].[contenthash].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        mode: "development"
    }
]