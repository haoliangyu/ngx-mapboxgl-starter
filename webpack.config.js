const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeJsPlugin = require("optimize-js-plugin");
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const srcDir = 'public_src';
const outputDir = 'public';

module.exports = {
    devtool: "source-map",
    entry: {
        app: path.resolve(srcDir, 'bootstrap.ts')
    },
    output: {
        path: path.resolve(__dirname, outputDir),
        filename: '[name].[hash].bundle.js',
        sourceMapFilename: '[name].[hash].map',
        chunkFilename: '[id].[hash].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.component.ts', '.service.ts', '.js', '.component.html', '.component.less', '.less', '.css'],
        alias: {
            'webworkify': 'webworkify-webpack',
            'mapbox-gl': path.resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js')
        }
    },
    module: {
        rules: [
            { test: /\.ts$/, enforce: 'pre', loader: 'tslint-loader' },
            { test: /(\.component|\.service|)\.ts$/, use: ['ts-loader'] },
            { test: /\.component\.html$/, use: ['raw-loader'] },
            { test: /(\.component|)\.less$/, use: ['to-string-loader', 'css-loader', 'less-loader'] },
            { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })},
            { test: /\.(png|gif|jpg)$/, use:[{ loader: 'file-loader', options: { name: 'images/[name].[ext]'} } ]},
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use:[{ loader: 'file-loader', options: { name: 'fonts/[name].[ext]'} } ]},
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use:[{ loader: 'file-loader', options: { name: 'fonts/[name].[ext]'} } ]},
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use:[{ loader: 'file-loader', options: { name: 'fonts/[name].[ext]'} } ]},
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use:[{ loader: 'file-loader', options: { name: 'fonts/[name].[ext]'} } ]},
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use:[{ loader: 'file-loader', options: { name: 'fonts/[name].[ext]'} } ]},
            {
                enforce: 'post',
                include: /node_modules\/mapbox-gl-shaders/,
                loader: 'transform',
                query: 'brfs'
            }
        ],
        noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
    },
    plugins: [
        // uncomment this code for production
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     mangle: true
        // }),
        new ExtractTextPlugin("[name].[hash].css"),
        new HtmlWebpackPlugin({
            template: path.resolve(srcDir, 'index.html'),
            inject: true
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new OptimizeJsPlugin({
          sourceMap: false
        }),
        new WebpackCleanupPlugin({
            exclude: ['index.html']
        })
    ]
};
