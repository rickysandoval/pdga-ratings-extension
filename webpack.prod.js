import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';

const __dirname = path.resolve();


export default merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, `dist-prod/js`),
        filename: "[name].js"
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
            from: './src/manifest.json',
            to: path.resolve(__dirname, `dist-prod`)
        }, {
            from: './src/icons',
            to: path.resolve(__dirname, `dist-prod/icons`)
        }, ]}),
        new VueLoaderPlugin()
    ]
});
