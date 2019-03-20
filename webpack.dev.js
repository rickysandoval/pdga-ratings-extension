const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, `dist-dev/js`),
        filename: "[name].js"
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './src/manifest.json',
            to: path.resolve(__dirname, `dist-dev`)
        }]),
        new VueLoaderPlugin()
    ]
});