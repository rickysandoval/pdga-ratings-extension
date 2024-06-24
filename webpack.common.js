import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    entry: {
        'ratings-detail-page': './src/js/content-scripts/ratings-detail-page.ts',
        'content-script': ["./src/scss/content-script.scss"]
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.ts$|\.tsx$/,
            use: {
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.json'
                }
            },
            exclude: /node_modules/
        }, {
            test: /\s.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        ["env", {
                            "targets": {
                                "chrome": 52
                            }
                        }]
                    ]
                }
            }
        },{
            test: /\.scss$/,
            use: [
                // fallback to style-loader in development
                MiniCssExtractPlugin.loader,
                // "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "../styles/[name].css",
            chunkFilename: "[id].css"
        })
    ]
}
