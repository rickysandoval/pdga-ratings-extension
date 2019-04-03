const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, `dist-prod/js`),
        filename: "[name].js"
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './src/manifest.json',
            to: path.resolve(__dirname, `dist-prod`)
        }, {
            from: './src/icons',
            to: path.resolve(__dirname, `dist-prod/icons`)
        }, ]),
        new VueLoaderPlugin()
    ]
});