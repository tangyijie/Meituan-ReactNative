'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('webpack-html-plugin');
var HasteResolverPlugin = require('haste-resolver-webpack-plugin');

var IP = '0.0.0.0';
var PORT = 3000;
var NODE_ENV = process.env.NODE_ENV;
var ROOT_PATH = path.resolve(__dirname, '..');
var PROD = 'production';
var DEV = 'development';
let isProd = NODE_ENV === 'production';

var config = {
    paths: {
        src: path.join(ROOT_PATH, '.'),
        index: path.join(ROOT_PATH, 'index.web'),
    },
};

var webpackConfig = {
    ip: IP,
    port: PORT,
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        alias: {
            'react-native': 'ReactWeb',
        },
        extensions: ['', '.js', '.jsx'],
    },
    entry: isProd ? [
        'babel-polyfill',
        config.paths.index
    ] : [
        'babel-polyfill',
        'webpack-dev-server/client?http://' + IP + ':' + PORT,
        'webpack/hot/only-dev-server',
        config.paths.index,
    ],
    output: {
        publicPath: "",
        path: path.join(__dirname, 'output'),
        filename: 'bundle.js'
    },
    plugins: [
        new HasteResolverPlugin({
            platform: 'web',
            nodeModules: ['react-web']
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(isProd ? PROD : DEV),
            }
        }),
        isProd ? new webpack.ProvidePlugin({
            React: 'react'
        }) : new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.json$/,
            loader: 'json',
        }, {
            test: /\.jsx?$/,
            loader: 'react-hot',
            include: [config.paths.src],
            exclude: [/node_modules/]
        }, {
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
                presets: ['react-native', 'stage-1', 'react']
            },
            include: [config.paths.src],
            exclude: [path.sep === '/' ? /(node_modules\/(?!react))/ : /(node_modules\\(?!react))/]
        }, {
            test: /\.jsx?$/,         // Match both .js and .jsx files
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ['es2015', 'react', 'react-native']
            }
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.(png|gif|svg|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.js?$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'latest'],
                plugins: ["transform-class-properties", "syntax-object-rest-spread", "transform-object-rest-spread"]
            },
            //add your modules here
            include: [
                path.join(ROOT_PATH, 'node_modules/react-native-vector-icons'),
                path.join(ROOT_PATH, 'node_modules/react-native-elements')
            ],
            // exclude:[/\.png$/gi]
        }, {
            // Match woff2 in addition to patterns like .woff?v=1.1.1.
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url',
            query: {
                limit: 50000,
                mimetype: 'application/font-woff',
                name: './fonts/[hash].[ext]'
            },
            include: [
                path.join(ROOT_PATH, 'web/custom_node_modules/react-native-vector-icons')
            ]
        }, {
            test: /\.ttf$|\.eot$/,
            loader: 'file',
            query: {
                // name: 'font/[hash].[ext]'
                name: 'file/[hash].[ext]'
            },
            include: [
                path.join(ROOT_PATH, 'web/custom_node_modules/react-native-vector-icons')
            ]
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader",
            include: [
                path.join(ROOT_PATH, 'web/custom_node_modules/react-native-vector-icons')
            ]
        }
        ]
    }
};
webpackConfig.resolve.alias[path.basename(ROOT_PATH, '.')] = path.join(ROOT_PATH, '.');

module.exports = webpackConfig;
