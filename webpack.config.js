const path = require('path');
const fs = require('fs')

module.exports = {
    mode: 'development',
    entry: './index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        alias: {
            "@models": path.resolve(__dirname, 'src/models')
        },
        extensions: ['.ts', '.tsx', '.js', '.json'],
        fallback: {
            "crypto": require.resolve("crypto-browserify"),
            "http": require.resolve("stream-http"),
            "fs": false,
            "zlib": false,
        },
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
};