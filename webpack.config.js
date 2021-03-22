const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.ts',
    target: 'node',
    externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
    externals: [ NodeExternals()], // in order to ignore all modules in node_modules folder
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new NodePolyfillPlugin(),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        alias: {
            "@models": path.resolve(__dirname, 'src/models')
        },
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
};